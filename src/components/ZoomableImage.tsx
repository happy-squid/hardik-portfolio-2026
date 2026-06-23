import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ZoomableImageProps {
  src: string;
  alt: string;
  /** Optional caption rendered beneath the inline image. */
  caption?: string;
  /** Optional className forwarded to the inline trigger wrapper. */
  className?: string;
  /** Loads the image eagerly when true (e.g. above-the-fold media). */
  priority?: boolean;
  /** How the image fits its box. Defaults to 'contain' so diagrams aren't cropped. */
  objectFit?: 'contain' | 'cover';
  /**
   * Optional Tailwind max-height class for the inline image (e.g. 'max-h-[640px]').
   * Caps how tall a diagram renders in the page flow while object-contain keeps
   * it uncropped; full detail is still available via the zoom dialog.
   */
  maxHeightClass?: string;
  /**
   * Hint label shown over the image. Pass an explicit string to override,
   * or `false` to hide the hint entirely (e.g. on a subtle hero image).
   */
  zoomHint?: string | false;
}

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';

/** True on devices with a precise pointer (mouse/trackpad) that supports hover. */
function useIsFinePointer(): boolean {
  const [fine, setFine] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia(FINE_POINTER_QUERY).matches,
  );
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia(FINE_POINTER_QUERY);
    const onChange = (e: MediaQueryListEvent) => setFine(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return fine;
}

/**
 * ZoomableImage renders an image inline and opens it in an accessible,
 * map-like zoom dialog powered by react-zoom-pan-pinch. The dialog supports
 * pinch-to-zoom and pan on touch, wheel/trackpad zoom on desktop, double-tap
 * to zoom, Escape / close button / backdrop tap to dismiss, and locks
 * background scrolling while open. Images use object-fit: contain so detailed
 * diagrams are never cropped.
 */
export function ZoomableImage({
  src,
  alt,
  caption,
  className,
  priority = false,
  objectFit = 'contain',
  maxHeightClass,
  zoomHint,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const isFinePointer = useIsFinePointer();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const fitClass = objectFit === 'cover' ? 'object-cover' : 'object-contain';
  const showHint = zoomHint !== false;
  const hintLabel =
    typeof zoomHint === 'string'
      ? zoomHint
      : isFinePointer
        ? 'Click to zoom'
        : 'Tap to zoom';

  function handleClose() {
    setOpen(false);
    // Return focus to the trigger for keyboard users.
    triggerRef.current?.focus();
  }

  return (
    <figure className={['m-0', className ?? ''].join(' ')}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zoom image: ${alt}`}
        aria-haspopup="dialog"
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={['mx-auto h-auto w-full', fitClass, maxHeightClass ?? ''].join(' ')}
        />
        {showHint && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white"
          >
            {hintLabel}
          </span>
        )}
      </button>

      {caption && (
        <figcaption className="mt-2 text-sm text-neutral-500">
          {caption}
        </figcaption>
      )}

      {open && <ZoomDialog src={src} alt={alt} onClose={handleClose} />}
    </figure>
  );
}

interface ZoomDialogProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/** Movement (px) above which a pointer interaction counts as a pan, not a tap. */
const TAP_THRESHOLD = 8;

function ZoomDialog({ src, alt, onClose }: ZoomDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pointerDown = useRef<{ x: number; y: number } | null>(null);

  // Lock background scroll while the dialog is open; restore on close.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Escape closes; focus the close button on open.
  useEffect(() => {
    closeButtonRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  // Close on backdrop tap, but ignore taps that were actually a pan gesture
  // or that landed on the image itself (so panning/double-tap-zoom still work).
  function handlePointerDown(e: React.PointerEvent) {
    pointerDown.current = { x: e.clientX, y: e.clientY };
  }
  function handleClick(e: React.MouseEvent) {
    const start = pointerDown.current;
    const moved = start
      ? Math.hypot(e.clientX - start.x, e.clientY - start.y)
      : 0;
    const clickedImage = (e.target as HTMLElement).tagName === 'IMG';
    if (!clickedImage && moved < TAP_THRESHOLD) onClose();
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close zoom"
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={6}
        centerOnInit
        doubleClick={{ mode: 'zoomIn', step: 1 }}
        wheel={{ step: 0.2 }}
        pinch={{ step: 5 }}
      >
        <TransformComponent
          wrapperStyle={{ width: '100vw', height: '100vh' }}
          contentStyle={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="max-h-[92vh] max-w-[92vw] object-contain select-none"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>,
    document.body,
  );
}
