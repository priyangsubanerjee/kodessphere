// app/providers.tsx
"use client";

import GlobalState from "@/context/GlobalStates";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export function Providers({ children }) {
  const [count, setCount] = useState(0);
  return (
    <SessionProvider>
      <GlobalState.Provider
        value={{
          count,
          setCount,
        }}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </GlobalState.Provider>
    </SessionProvider>
  );
}
