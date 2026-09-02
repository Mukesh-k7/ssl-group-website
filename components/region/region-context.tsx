"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const regionOptions = ["Domestic", "International"] as const;
export type RegionOption = (typeof regionOptions)[number];

const RegionContext = createContext<{
  region: RegionOption;
  setRegion: (region: RegionOption) => void;
} | null>(null);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<RegionOption>("Domestic");

  const value = useMemo(
    () => ({
      region,
      setRegion,
    }),
    [region]
  );

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const context = useContext(RegionContext);

  if (!context) {
    throw new Error("useRegion must be used inside a RegionProvider");
  }

  return context;
}
