import { startsWith } from "lodash";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useAppNavbarLink(link: string) {
  const currentPath = usePathname();

  return {
    isSelected: useMemo(() => {
      if (link === "/app") {
        return currentPath === "/app";
      } else {
        return startsWith(currentPath, link);
      }
    }, [currentPath, link]),
  };
}
