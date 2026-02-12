export function ShootingStars() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-700 dark:opacity-100 motion-reduce:hidden">
      <div className="relative h-full w-full">
        <span className="absolute left-[10%] top-[12%] h-[2px] w-24 -rotate-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70 motion-safe:animate-shooting-star" />
        <span className="absolute left-[30%] top-[28%] h-[2px] w-28 -rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70 motion-safe:animate-shooting-star [animation-delay:1.2s]" />
        <span className="absolute left-[55%] top-[10%] h-[2px] w-20 -rotate-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 motion-safe:animate-shooting-star [animation-delay:2.4s]" />
        <span className="absolute left-[70%] top-[32%] h-[2px] w-28 -rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-60 motion-safe:animate-shooting-star [animation-delay:3.4s]" />
        <span className="absolute left-[20%] top-[48%] h-[2px] w-24 -rotate-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 motion-safe:animate-shooting-star [animation-delay:4.6s]" />
        <span className="absolute left-[60%] top-[55%] h-[2px] w-24 -rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-60 motion-safe:animate-shooting-star [animation-delay:5.6s]" />
      </div>
    </div>
  );
}
