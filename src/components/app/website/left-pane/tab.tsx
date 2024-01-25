"use client";

import { Button } from "@/components/ui/button";
import { useWebsiteTab } from "@/lib/domain/website/state";
import Link from "next/link";

export default function LeftPaneTab(props: { id: string; label: string }) {
  const { isSelected, href } = useWebsiteTab(props.id);

  return (
    <Button variant={isSelected ? "default" : "outline"} asChild>
      <Link href={href}>{props.label}</Link>
    </Button>
  );
}
