export const SideNavItem = (props) => {
  const { icon, path, title, close } = props;

  return (
    <li className="group-active:bg-black/5">
      <a
        onClick={close}
        className="items-center rounded-[1px] flex justify-center px-4 py-2 text-left w-full
        cursor-pointer hover:bg-black/5 focus:bg-black/5 focus:ring-0 active:bg-black/5 disabled:bg-white"
        href={path}
      >
        {icon && (
          <span className="items-center flex w-5 h-5 text-base list-outside list-none list-image-none font-normal justify-center decoration-auto antialiased text-left mr-4 active:text-neutral-900">
            {icon}
          </span>
        )}
        <span className="flex-grow text-[14px] leading-6 text-left list-outside list-none list-image-none decoration-auto antialiased font-semibold whitespace-nowrap active: disabled:">
          {title}
        </span>
      </a>
    </li>
  );
};