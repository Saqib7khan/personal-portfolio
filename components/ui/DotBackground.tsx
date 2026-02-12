interface DotBackgroundProps {
  className?: string;
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
}

/**
 * DotBackground Component
 * 
 * SVG-based dot pattern background.
 * Creates a subtle dotted pattern for sections.
 * 
 * @component
 * @example
 * <DotBackground className="opacity-20" />
 */
export function DotBackground({ 
  className = "", 
  dotSize = 2,
  dotSpacing = 20,
  dotColor = "rgb(var(--color-foreground))"
}: DotBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width={dotSpacing}
            height={dotSpacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={dotSpacing / 2}
              cy={dotSpacing / 2}
              r={dotSize}
              fill={dotColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
