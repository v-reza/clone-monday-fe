"use client";
import React, { PropsWithChildren, Fragment, useState } from "react";
import { Popover as Base, Transition } from "@headlessui/react";
import { classNames } from "../utils/functions";
import clsx from "clsx";
type MenuProps = {
  toolbar: React.ReactNode;
  className?: string;
  trigger?: "hover" | "click";
};

type TransitionSubmenu = {
  [key: string]: boolean
}

export const Menu = (props: PropsWithChildren<MenuProps>) => {
  const { toolbar, children, className, trigger = "click" } = props;
  const [openTransitionSubMenu, setOpenTransitionSubMenu] = useState<TransitionSubmenu>({});

  return (
    <>
      <Base as="div">
        <Base.Button className="focus:ring-0 focus:ring-offset-0 focus:outline-0" as="div">
          {toolbar}
        </Base.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Base.Panel
            className={clsx(
              "absolute z-40 mt-2 w-56 origin-top-right rounded-md bg-[#30324E] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              className
            )}
          >
            <div className="py-1">
              {React.Children.map(children, (childs: any) => {
                const submenu = childs.props["data-submenu"];
                const submenuid = childs.props["data-submenu-id"];
                if (submenu) {
                  return (
                    <Base as="div" className="relative">
                      <Base.Button
                        className={childs.props.className}
                        onMouseEnter={() => {
                          setOpenTransitionSubMenu({
                            [submenuid]: true,
                          });
                        }}
                        onMouseLeave={() => {
                          setOpenTransitionSubMenu({
                            [submenuid]: false,
                          });
                        }}
                      >
                        {React.cloneElement(childs)}
                      </Base.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        show={openTransitionSubMenu[submenuid]}
                      >
                        <Base.Panel
                          onMouseEnter={() => {
                            setOpenTransitionSubMenu({
                              [submenuid]: true,
                            });
                          }}
                          onMouseLeave={() => {
                            setOpenTransitionSubMenu({
                              [submenuid]: false,
                            });
                          }}
                          className={clsx(
                            "absolute text-white z-40 mt-2 w-56 origin-top-right right-0 translate-x-full -top-[0.5rem] transform rounded-md bg-[#30324E] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                            className
                          )}
                        >
                          {React.cloneElement(submenu)}
                        </Base.Panel>
                      </Transition>
                    </Base>
                  );
                }
                return React.cloneElement(childs);
              })}
            </div>
          </Base.Panel>
        </Transition>
      </Base>
    </>
  );
};

export default Menu;
