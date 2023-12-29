import React, { Suspense } from "react";

export default async function Layout({ children }) {
    return (
        <Suspense>
            {children}
        </Suspense>
    )
}


