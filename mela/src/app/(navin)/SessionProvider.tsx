// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Basic session types
type User = { role?: string } | null;
type Session = { user: User } | null;

// Internal context to hold session state
const SessionContext = createContext<{
  session: Session;
  setSession: (s: Session) => void;
} | null>(null);

// Default provider implementation so this module does not depend on an external file.
export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session>(null);

  useEffect(() => {
    // Placeholder: load or initialize session here.
    // For example, fetch("/api/session") or read from a global injected value.
    // Leaving as null keeps behavior compatible with the original (loading/null).
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
}

// Internal hook used by other helpers in this file
function _useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    // If the hook is used outside of the provider, return a safe default (loading: null user)
    return { user: null } as { user: User };
  }
  return ctx.session ?? { user: null };
}

// Re-export the hook from the implementation for convenience
export function useSession() {
  return _useSession();
}

// Small convenience: check whether the current user is an admin
export function useIsAdmin() {
  const { user } = _useSession();
  return Boolean(user?.role === "ADMIN");
}

// Client-side guard: if the user is known to be non-admin, redirect them.
// This is only a UX convenience; server routes/layouts must still enforce access.
export function useRequireAdmin(redirectTo = "/malper") {
  const router = useRouter();
  const isAdmin = useIsAdmin();

  useEffect(() => {
    // If we know the user is not admin, redirect. If user is null (loading), do nothing.
    if (isAdmin === false) {
      router.push(redirectTo);
    }
  }, [isAdmin, redirectTo, router]);
}
