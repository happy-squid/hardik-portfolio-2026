import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomableImageProps {
  src: string;
  alt: string;
  /** Optional className forwarded to the wrapper div */
  className?: string;
}

/**
 * ZoomableImage wraps react-medium-image-zoom to provide accessible click/tap
 * image enlargement. Supports:
 * - Mouse click to zoom
 * - Keyboard (Enter/Space) to zoom
 * - Touch tap to zoom
 * - Escape key, close button, or outside click/tap to dismiss
 *
 * Uses object-fit: contain so the full image is always visible.
 */
export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  return (
    <div
      className={[
        'cursor-zoom-in overflow-hidden rounded-lg bg-neutral-50',
        className ?? '',
      ].join(' ')}
    >
      <Zoom
        zoomMargin={24}
        classDialog="zoom-dialog"
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain"
          style={{ display: 'block' }}
        />
      </Zoom>
    </div>
  );
}
