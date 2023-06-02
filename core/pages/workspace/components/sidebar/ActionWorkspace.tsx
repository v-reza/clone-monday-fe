"use client";
import { Menu, Separator } from "@/src/components";
import React from "react";

const ActionWorkspace = () => {
  return (
    <Menu
      toolbar={
        <div className="mr-4 rounded-md px-2 hover:bg-gray-600 cursor-pointer">
          <i className="far fa-ellipsis-h text-sm text-white"></i>
        </div>
      }
    >
      <div className="block px-4 py-2 hover:bg-gray-600">
        <div className="flex items-center space-x-2">
          <i className="far fa-external-link-alt text-white text-md"></i>
          <span className="text-sm text-[#D6D8DF]">Open Board in New Tab</span>
        </div>
      </div>
      <Separator />
      <div className="block px-4 py-2 hover:bg-gray-600">
        <div className="flex items-center space-x-2">
          <i className="far fa-pencil text-white text-md"></i>
          <span className="text-sm text-[#D6D8DF]">Rename Board</span>
        </div>
      </div>
      <div
        className="block px-2 w-full py-1 hover:bg-gray-600"
        data-submenu-id="workspace_move_to"
        data-submenu={
          <>
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-folder text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">Move to folder</span>
              </div>
            </div>
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-briefcase text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">
                  Move to workspace
                </span>
              </div>
            </div>
          </>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="far fa-arrow-right text-white text-md"></i>
            <span className="text-sm text-[#D6D8DF]">Move To</span>
          </div>
          <div>
            <i className="far fa-chevron-right text-white text-md"></i>
          </div>
        </div>
      </div>
      <div
        className="block px-2 w-full py-1 hover:bg-gray-600"
        data-submenu-id="workspace_change_board_type"
        data-submenu={
          <>
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-share-alt text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">
                  Change to Shareable
                </span>
              </div>
            </div>
            <div className="block px-4 py-2 hover:bg-gray-600">
              <div className="flex items-center space-x-2">
                <i className="far fa-lock text-white text-md"></i>
                <span className="text-sm text-[#D6D8DF]">
                  Change to Private
                </span>
              </div>
            </div>
          </>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="far fa-exchange text-white text-md"></i>
            <span className="text-sm text-[#D6D8DF]">Change board type</span>
          </div>
          <div>
            <i className="far fa-chevron-right text-white text-md"></i>
          </div>
        </div>
      </div>
      <div className="block px-4 py-2 hover:bg-gray-600">
        <div className="flex items-center space-x-2">
          <i className="far fa-star text-white text-md"></i>
          <span className="text-sm text-[#D6D8DF]">Add to favorites</span>
        </div>
      </div>
      <div className="block px-4 py-2 hover:bg-gray-600">
        <div className="flex items-center space-x-2">
          <i className="far fa-copy text-white text-md"></i>
          <span className="text-sm text-[#D6D8DF]">Duplicate Board</span>
        </div>
      </div>
      <Separator />
      <div className="block px-4 py-2 hover:bg-gray-600">
        <div className="flex items-center space-x-2">
          <i className="far fa-trash text-white text-md"></i>
          <span className="text-sm text-[#D6D8DF]">Delete</span>
        </div>
      </div>
      <div className="block px-4 py-2 hover:bg-gray-600">
        <div className="flex items-center space-x-2">
          <i className="far fa-archive text-white text-md"></i>
          <span className="text-sm text-[#D6D8DF]">Archive</span>
        </div>
      </div>
    </Menu>
  );
};

export default ActionWorkspace;
