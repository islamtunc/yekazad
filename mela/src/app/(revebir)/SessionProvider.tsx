// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd

"use client";

import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

interface SessionContext {
  // user may include a role field added by the layouts; keep it flexible
  user: (User & { role?: string }) | null;
  // session may be a partial object in some server-side callers
  session: Partial<Session> | null;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function BikarhenerenSessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContext }>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  // Return a safe fallback instead of throwing so components that render
  // outside a provider don't crash (they should handle null user/session).
  if (!context) {
    return { user: null, session: null } as SessionContext;
  }
  return context;
}
