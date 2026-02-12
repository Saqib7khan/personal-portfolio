interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  strokeWidth?: number;
  strokeColor?: string;
}

/**
 * GridBackground Component
 * 
 * SVG-based grid pattern background.
 * Creates a subtle grid pattern for sections.
 * 
 * @component
 * @example
 * <GridBackground className="opacity-10" />
 */
export function GridBackground({ 
  className = "", 
  gridSize = 50,
  strokeWidth = 1,
  strokeColor = "rgb(var(--color-foreground))"
}: GridBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
