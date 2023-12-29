import React, { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  )
}
