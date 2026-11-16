"use client"
import { useState } from "react";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import Sidebar from "./sidebar";

export default function SidebarController() {
  const [open, setOpen] = useState(false);
  const closeSidebar = () => setOpen(false);
  const toggleSidebar = () => setOpen((currentOpen) => !currentOpen);

  return (
    <>
      <Bars3Icon
        width={20}
        height={20}
        onClick={toggleSidebar}
        className="fixed w-5 h-5 left-6 top-[22px] z-[9997] cursor-pointer"
      />
      <Sidebar open={open} close={closeSidebar} />
    </>
  );
}
