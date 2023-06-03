"use client";
import React, { useEffect, useCallback } from "react";
import clsx from "clsx";
import { getRandomHexColor } from "@/src/utils/functions";
import { Button, ButtonIcon, Menu, Separator } from "@/src/components";
import { CheckboxInput, SearchInput } from "@/src/components/form";
import { useAppDispatch, useAppSelector } from "@/src/hooks";
import {
  setIsOpen,
  workspaceSelector,
} from "@/src/redux/reducer/workspaceSidebar";
import ActionWorkspace from "./components/sidebar/ActionWorkspace";
import { listWorkspaceBoard } from "@/src/utils/dummy/workspace";
import Link from "next/link";

const NameWithIcon = () => {
  return (
    <>
      <div
        className="relative p-[0.10rem] px-2 rounded-lg w-max"
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className="text-white text-xs">M</span>
        <div className="absolute left-4 top-[0.7rem]">
          <i className="far fa-home text-white text-xs"></i>
        </div>
      </div>
    </>
  );
};

const ToolbarWorkspace = () => {
  return (
    <>
      <div className="flex items-center space-x-4 px-2 hover:bg-gray-600 p-[0.50rem] rounded-md cursor-pointer">
        <NameWithIcon />
        <div>
          <span className="text-white text-sm font-bold">Main Workspace</span>
        </div>
        <div>
          <i className="far fa-chevron-down text-sm text-white"></i>
        </div>
      </div>
    </>
  );
};

const Form = () => {
  return (
    <>
      <div className="pt-2 px-2">
        <div className="flex items-center justify-between">
          <Menu toolbar={<ToolbarWorkspace />} className="bg-[#30324E] w-80">
            <div className="block px-4 py-2 text-sm">
              <SearchInput placeholder="Search for a workspace" />
            </div>
            <div className="block px-4 py-2 mt-2">
              <div className="flex flex-col">
                <span className="text-[#C0C2D0] text-sm font-medium">
                  My workspaces
                </span>
                <div className="w-full py-2 px-2 mt-1 rounded-md bg-[#133774] flex items-center space-x-4">
                  <NameWithIcon />
                  <span className="text-[#C0C2D0] text-xs font-medium">
                    Main workspace
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-600/50 h-[1.6px] w-full" />
            <div className="py-2 px-4 flex items-center justify-between">
              <Button
                label="Add workspace"
                btnType="no-outline"
                className="hover:bg-gray-700"
                icon={{
                  position: "left",
                  className: "far fa-plus text-white text-xs",
                }}
              />
              <Button
                label="Browse all"
                btnType="no-outline"
                className="hover:bg-gray-700"
                icon={{
                  position: "left",
                  className: "far fa-th-large text-white text-xs",
                }}
              />
            </div>
          </Menu>
          <div className="mr-4 rounded-md px-2 hover:bg-gray-600 cursor-pointer">
            <i className="far fa-ellipsis-h text-sm text-white"></i>
          </div>
        </div>
        <div className="py-2 flex items-center justify-between space-x-2">
          <SearchInput placeholder="Search" />
          <Menu
            toolbar={
              <div
                className="tooltip-top"
                data-tooltip="Filters"
                data-tooltip-position="top"
              >
                <div className="relative">
                  <div className="absolute -top-[0.8rem] -right-[0.4rem]">
                    <span className="text-xs text-white px-1 rounded-full bg-blue-500">
                      0
                    </span>
                  </div>
                  <ButtonIcon btnType="info" icon="far fa-filter text-white" />
                </div>
              </div>
            }
          >
            <div className="block px-4 py-2">
              <span className="text-[#C0C2D0] text-xs font-medium">
                Filter by
              </span>
              <div className="flex flex-col space-y-3">
                <CheckboxInput label="Main" />
                <CheckboxInput label="Private" />
                <CheckboxInput label="Shareable" />
                <Separator />
                <CheckboxInput label="Subsribed or Owner" />
                <CheckboxInput label="Owner only" />
                <Separator />
                <CheckboxInput label="Dashboards only" />
              </div>
            </div>
          </Menu>
          <Menu
            toolbar={
              <div
                className="tooltip-top"
                data-tooltip="Add item to workspace"
                data-tooltip-position="top"
              >
                <ButtonIcon btnType="primary" icon="far fa-plus text-white" />
              </div>
            }
          >
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-th-large text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">New Board</span>
              </div>
            </div>
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-file-alt text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">New Doc</span>
              </div>
            </div>

            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-file-edit text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">New Form</span>
              </div>
            </div>
            <Separator />
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-file-chart-line text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">New Dashboard</span>
              </div>
            </div>
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-folder-plus text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">New Folder</span>
              </div>
            </div>
          </Menu>
        </div>
        <div className="flex flex-col space-y-2">
          {listWorkspaceBoard.map((item) => (
            <Link key={item.name} href="/boards/1">
            <div className="py-3 rounded-md hover:bg-gray-600 cursor-pointer" key={item.name}>
              <div className="flex items-center justify-between">
                <div className="flex px-2 items-center space-x-4">
                  <i className="far fa-th-large text-white text-md"></i>
                  <span className="text-sm text-white">{item.name}</span>
                </div>
                <ActionWorkspace />
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const WorkspaceSidebar = () => {
  const { isOpen: open } = useAppSelector(workspaceSelector);
  const dispatch = useAppDispatch();
  const setOpen = useCallback(
    (value: boolean) => {
      dispatch(setIsOpen(value));
    },
    [open]
  );

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <div className="h-screen min-h-full">
        <div
          className={clsx("bg-[#393B53] px-2 h-screen transition-all", {
            "w-[18rem]": open,
            "w-[1rem]": !open,
          })}
        >
          {open ? (
            <div
              className="absolute p-[0.10rem] px-2 z-10 bg-black border border-white/20 rounded-full top-4 left-[22rem] hover:bg-gray-500 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <i className="far fa-chevron-left text-white text-sm"></i>
            </div>
          ) : (
            <div
              className="absolute p-[0.10rem] px-2 z-10 bg-black border border-white/20 rounded-full top-4 left-[5.3rem] hover:bg-gray-500 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <i className="far fa-chevron-right text-white text-sm"></i>
            </div>
          )}
          {open && <Form />}
        </div>
      </div>
    </>
  );
};

export default WorkspaceSidebar;
