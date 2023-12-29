import React from "react";
import {
  AnimatePresence,
  m,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import merge from "deepmerge";
import { twMerge } from "tailwind-merge";

export default function Collapse({ open, children, ref, ...rest }) {
  const animation = {
    unmount: {
      height: "0px",
      transition: { duration: 0.3, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      height: "auto",
      transition: { duration: 0.3, times: [0.4, 0, 0.2, 1] },
    },
  };

  const collapseAnimation = merge(animation, {});
  const NewAnimatePresence = AnimatePresence;

  return (
    <LazyMotion features={domAnimation}>
      <NewAnimatePresence>
        <m.div
          {...rest}
          ref={ref}
          className={twMerge("block w-full basis-full overflow-hidden")}
          initial="unmount"
          exit="unmount"
          animate={open ? "mount" : "unmount"}
          variants={collapseAnimation}
        >
          {children}
        </m.div>
      </NewAnimatePresence>
    </LazyMotion>
  );
}
