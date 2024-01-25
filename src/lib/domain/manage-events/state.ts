import { useCallback } from "react";
import { create } from "zustand";

const manageEventsState = create<ManageEventsState>((set) => ({
  shown: false,
}));

export function useManageEventsVisibility() {
  return {
    visible: manageEventsState((s) => s.shown),
    show: useCallback(() => manageEventsState.setState({ shown: true }), []),
    hide: useCallback(() => manageEventsState.setState({ shown: false }), []),
  };
}

interface ManageEventsState {
  shown: boolean;
}
