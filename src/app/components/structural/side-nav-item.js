import { useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react';
import Link from 'next/link';

export const SideNavItem = (props) => {
  const { icon, path, title, close } = props;
  const { refs, context } = useFloating({ onOpenChange: close });
  const { getReferenceProps, getFloatingProps } = useInteractions([useClick(context), useDismiss(context)]);

  return (
    <>
      <li
        ref={refs.setReference}
        {...getReferenceProps()} className="group-active:bg-black/5">
        <Link
          className="items-center rounded-[1px] flex justify-center px-4 py-2 text-left w-full
        cursor-pointer hover:bg-black/5 focus:bg-black/5 focus:ring-0 active:bg-black/5 disabled:bg-white"
          href={path}
          as={path}
          prefetch={process.env.NODE_ENV == "development" && false}
        >
          {icon && (
            <span className="items-center flex w-5 h-5 text-base list-outside list-none list-image-none font-normal justify-center decoration-auto antialiased text-left mr-4 active:text-neutral-900">
              {icon}
            </span>
          )}
          <span
            ref={refs.setFloating}
            {...getFloatingProps()}
            className="  flex-grow text-[14px] leading-6 text-left list-outside list-none list-image-none decoration-auto antialiased font-semibold whitespace-nowrap active:  disabled: ">
            {title}
          </span>
        </Link>
      </li>
    </>
  );
};