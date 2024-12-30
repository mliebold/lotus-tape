import { clsx, type ClassValue } from "clsx";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addRandomFileNameSuffix(fileName: string) {
  const fileNameParts = fileName.split(".");
  const randomSuffix = randomUUID();
  return `${fileNameParts[0]}-${randomSuffix}.${fileNameParts[1]}`;
}
