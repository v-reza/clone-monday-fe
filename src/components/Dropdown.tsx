"use client";
import React, { PropsWithChildren, Fragment } from "react";
import { Menu as Base, Transition } from "@headlessui/react";
import { classNames } from "../utils/functions";
import clsx from "clsx";
type DropdownProps = {
  toolbar: React.ReactNode;
  className?: string;
};

type DropdownItemProps = {
  children: React.ReactNode;
  activeBg?: string;
};

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
  const { toolbar, children, className } = props;
  return (
    <>
      <Base as="div">
        <Base.Button>{toolbar}</Base.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Base.Items
            className={clsx(
              "absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              className
            )}
          >
            <div className="py-1">
              {React.Children.map(children, (childs: any) => {
                const { props: child } =
                  childs as React.ReactElement<DropdownItemProps>;
                const { activeBg } = child;
                return (
                  <>
                    <Base.Item>
                      {({ active }) => {
                        return React.cloneElement(childs);
                      }}
                    </Base.Item>
                  </>
                );
              })}
            </div>
          </Base.Items>
        </Transition>
      </Base>
    </>
  );
};

export default Dropdown;
