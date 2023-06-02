"use client";
import React, { PropsWithChildren, useState } from "react";
import clsx from "clsx";

type TabProps = {
  className?: string;
};
export const Tab = (props: PropsWithChildren<TabProps>) => {
  const { children, className } = props;
  const [index, setIndex] = useState<number>(0);
  const mapChild = React.Children.toArray(children) as any;

  return (
    <>
      <div className="pb-5 border-b border-gray-200  sm:pb-0">
        <div className="mt-3 sm:mt-4">
          <div className="block">
            <nav className="-mb-px flex space-x-8">
              {React.Children.map(children, (child: any, i: number) => {
                const { props: childProps } =
                  child as React.ReactElement<TabItemProps>;
                return (
                  <div
                    key={childProps.label}
                    className={clsx(
                      "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm cursor-pointer",
                      {
                        "border-[#1072EA] text-[#1072EA]": index === i,
                        "border-transparent text-[#D5D7DE] hover:text-[#d5d7debd] hover:border-[#1072EA]":
                          index !== i,
                      }
                    )}
                    onClick={() => {
                      setIndex(i);
                      childProps.onClick && childProps.onClick();
                    }}
                  >
                    {childProps.label}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <div>{mapChild[index].props.children}</div>
    </>
  );
};

type TabItemProps = {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
};

Tab.Item = (props: TabItemProps) => {
  return <></>
};

export default Tab;
