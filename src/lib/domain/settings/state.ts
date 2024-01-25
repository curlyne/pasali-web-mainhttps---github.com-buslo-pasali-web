import { useCallback } from "react";
import { create } from "zustand";

const settingsState = create<SettingsState>((set) => ({
  shown: false,
}));

export function useSettingsVisibility() {
  return {
    visible: settingsState((s) => s.shown),
    show: useCallback(() => settingsState.setState({ shown: true }), []),
    hide: useCallback(() => settingsState.setState({ shown: false }), []),
  };
}

interface SettingsState {
  shown: boolean;
}
