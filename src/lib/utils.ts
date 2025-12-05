import { cn } from "../../lib/utils";

export function clsx(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
