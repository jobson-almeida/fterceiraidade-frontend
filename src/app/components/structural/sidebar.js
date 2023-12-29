import React from "react";
import { useDismiss, useFloating, useInteractions } from "@floating-ui/react";
import { twMerge } from "tailwind-merge";
import SimpleBar from 'simplebar-react';
import { SideNavItem } from "./side-nav-item";
import { items } from "./config";
import useMediaQuery from "@/app/utils/useMediaQuery";
import { Logo } from "./logo";
import Modal from "./modal";
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";

export default function Sidebar({ open, close }) {
  const { refs, context } = useFloating({ open, onOpenChange: close });
  const { getFloatingProps } = useInteractions([useDismiss(context)]);
  const modal = useMediaQuery("(max-width: 1200px)")

  const content = (
    <nav className="flex flex-grow text-base font-normal px-4 py-6 antialiased">
      <ul className="border-spacing-1 flex flex-col text-base font-normal w-[247px] m-0 p-0">
        {items.map((item) => {
          return (
            <SideNavItem
              disabled={item.disabled}
              external={item.external}
              icon={item.icon}
              key={item.title}
              path={item.path}
              title={item.title}
              close={close}
            />
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      <div ref={refs.setFloating} {...getFloatingProps()}>
        <div className={twMerge("fixed top-0 left-[-280px] lgg:left-0 max-w-[280px] w-full h-full bg-white box-border shadow-2xl shadow-gray-900/10 z-[9999] pointer-events-auto delay-50",
          open ? "duration-open ease-open translate-x-[280px] lgg:translate-x-[0px]" : "duration-close ease-close translate-x-0",
        )}>
          <SimpleBar className="h-full">
            <div className="flex flex-col border-r border-neutral-200">
              <div className="p-6">
                <div className="bg-[rgba(0,0,0,0.04)] rounded-[1px] cursor-pointer">
                  <div className="flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16">
                      <Link href="/" as="/">
                        <Logo />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-neutral-300" />
            <div className="h-full border-r border-neutral-200">
              {content}
            </div>
          </SimpleBar>
        </div>
      </div >
      {open && modal && (<Modal />)}
    </>
  );
}
