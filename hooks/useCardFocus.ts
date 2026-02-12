"use client";

import { useCallback, useState } from "react";

export function useCardFocus<T extends string | number>() {
  const [activeId, setActiveId] = useState<T | null>(null);

  const getItemHandlers = useCallback(
    (id: T) => ({
      onMouseEnter: () => setActiveId(id),
      onMouseLeave: () => setActiveId(null),
      onFocus: () => setActiveId(id),
      onBlur: () => setActiveId(null),
    }),
    []
  );

  const reset = useCallback(() => setActiveId(null), []);

  return { activeId, getItemHandlers, reset };
}
