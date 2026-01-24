"use client";

import React, { createContext, useContext } from "react";
import en from "../../messages/en.json";

// ✅ automatically get types from JSON structure
export type Messages = typeof en;

const I18nContext = createContext<Messages | null>(null);

export function I18nProvider({
  messages,
  children,
}: {
  messages: Messages;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>
  );
}

export function useMessages() {
  const messages = useContext(I18nContext);

  if (!messages) {
    throw new Error("useMessages() must be used inside <I18nProvider>");
  }

  return messages;
}
