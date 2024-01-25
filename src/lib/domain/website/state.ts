import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { endsWith } from "lodash";

export function useWebsiteTab(id: string) {
  const path = usePathname();

  return {
    isSelected: useMemo(() => {
      if (id === "") {
        return path === "/app/website";
      } else {
        return endsWith(path, id);
      }
    }, [path, id]),
    href: useMemo(() => `/app/website/${id}`, [id]),
  };
}

interface WebsiteState {
  selectedTab: string | null;
}
