"use client"
import React, { useCallback, useState } from "react";
import Sidebar from '../components/structural/sidebar'
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import TopNav from "../components/structural/top-nav";
import { AddressBar } from "../components/structural/address-bar";

export default function AdminLayout({ children, admin }) {
    const [open, setOpen] = useState(false);
    const closeSidebar = () => setOpen(false);

    const openSidebar = useCallback(() => {
        setOpen(!open)
    }, [open])

    return (
        <section>
            <header>
                <Bars3Icon width={20} height={20} onClick={openSidebar} className="fixed w-5 h-5 left-6 top-[22px] z-[9997] cursor-pointer" />
                <TopNav />
            </header>
            <aside>
                <Sidebar open={open} close={closeSidebar} />
            </aside>
            <main className="px-8 py-8 mt-16 lgg:pl-[312px]">
                <div className="mb-8">
                    <AddressBar />
                </div>
                {children}
            </main>
        </section>
    )
}
