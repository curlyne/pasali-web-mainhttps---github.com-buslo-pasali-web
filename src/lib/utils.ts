import { type ClassValue, clsx } from "clsx"
import { compact, Falsey } from "lodash"
import { twMerge } from "tailwind-merge"
import { slugify } from "transliteration"

export function makeSlug(string: string) {
  return slugify(string, { trim: true, replace: { "-": "" } })
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function whenTrue<Result>(expression: boolean, result: Result): Result | null {
  if (expression) {
    return result
  } else {
    return null
  }
}

export function classes(...classes: (string | Falsey)[]) {
  return compact(classes).join(" ")
}
