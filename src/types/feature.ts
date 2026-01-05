import type { ComponentType, JSX } from "react";

export type Feature = {
  id: number;
  icon: ComponentType<{ className?: string }> | JSX.Element;
  title: string;
  paragraph: string;
};
