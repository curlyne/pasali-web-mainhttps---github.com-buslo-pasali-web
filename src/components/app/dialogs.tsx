"use client";

import ManageEventsContent from "@/components/app/manage-events/content";
import SettingsContent from "@/components/app/settings/content";
import { Dialog } from "@/components/ui/dialog";
import { useManageEventsVisibility } from "@/lib/domain/manage-events/state";
import { useSettingsVisibility } from "@/lib/domain/settings/state";
import { Fragment, useCallback } from "react";

export default function AppDialogs() {
  const { hide: settingsHide, visible: settingsVisible } =
    useSettingsVisibility();

  const { hide: manageEventsHide, visible: manageEventsVisible } =
    useManageEventsVisibility();

  return (
    <Fragment>
      <Dialog
        open={settingsVisible}
        onOpenChange={useCallback(
          (open: boolean) => !open && settingsHide(),
          [settingsHide],
        )}
      >
        <SettingsContent />
      </Dialog>
      <Dialog
        open={manageEventsVisible}
        onOpenChange={useCallback(
          (open: boolean) => !open && manageEventsHide(),
          [manageEventsHide],
        )}
      >
        <ManageEventsContent />
      </Dialog>
    </Fragment>
  );
}
