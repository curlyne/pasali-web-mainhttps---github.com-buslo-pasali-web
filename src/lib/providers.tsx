"use client";

import { ThemeProvider } from "next-themes";

export function Providers(props: React.PropsWithChildren) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}
