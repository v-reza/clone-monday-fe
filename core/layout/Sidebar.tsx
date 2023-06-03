"use client";
import React, { useEffect } from "react";
import logoIcon from "@assets/icon/monday_logo_icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/src/hooks";
import { setIsOpen } from "@/src/redux/reducer/workspaceSidebar";

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (pathname !== "/workspace" || pathname.includes("/boards")) {
      dispatch(setIsOpen(false))
    }
  }, [pathname])

  return (
    <div className="h-screen min-h-full">
      <div className="bg-[#292F4C] px-2 w-[5rem] h-screen">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="flex-shrink-0 pt-2 flex items-center justify-center ">
                <Image
                  alt="logo_icon"
                  src={logoIcon}
                  width={50}
                  height={60}
                  priority
                />
              </div>
            </Link>
            <div className="bg-gray-600/50 h-[1.6px] w-full" />
            <div className="flex flex-col items-center w-full space-y-4">
              <Link href="workspace">
                <div
                  className="mt-4 flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right peer"
                  data-tooltip="Workspace"
                  data-tooltip-position="right"
                >
                  {pathname === "/workspace" || pathname.includes("/boards") && (
                    <div className="arrow-sidebar" />
                  )}
                  <i className="fas fa-flower text-indigo-600 text-xl "></i>
                </div>
              </Link>
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Notifications"
                data-tooltip-position="right"
              >
                <i className="far fa-bell text-xl text-white"></i>
              </div>
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Inbox"
                data-tooltip-position="right"
              >
                <i className="far fa-inbox text-xl text-white"></i>
              </div>
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Calendar"
                data-tooltip-position="right"
              >
                <i className="far fa-calendar-check text-xl text-white"></i>
              </div>
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Favorites"
                data-tooltip-position="right"
              >
                <i className="far fa-star text-xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="pb-4 flex flex-col-reverse space-y-4 space-y-reverse w-full">
            <div className="flex items-center justify-center">
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right bg-indigo-600 rounded-md"
                data-tooltip="User"
                data-tooltip-position="right"
              >
                <i className="far fa-user text-xl text-white"></i>
              </div>
            </div>
            <div className="bg-gray-600/50 h-[1.6px] w-full" />
            <div className="flex flex-col-reverse items-center justify-center space-y-4 space-y-reverse w-full">
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Help"
                data-tooltip-position="right"
              >
                <i className="far fa-question text-xl text-white"></i>
              </div>
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Search Everything"
                data-tooltip-position="right"
              >
                <i className="far fa-search text-xl text-white"></i>
              </div>
              <div
                className="flex items-center p-2 hover:bg-gray-700 hover:rounded-md cursor-pointer tooltip-right"
                data-tooltip="Invite Member"
                data-tooltip-position="right"
              >
                <i className="far fa-user-plus text-xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
