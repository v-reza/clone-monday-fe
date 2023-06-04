"use client";
import { Button, HyperlinkText } from "@/src/components";
import Table from "@/src/components/table/Table";
import TextField from "@/src/components/table/components/TextField";
import { boardGroup, boardGroup1 } from "@/src/utils/dummy/board";
import React from "react";

const MainBoard = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-full">
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-white">
                Query Board
              </span>
              <div
                className="mr-4 rounded-md px-2 hover:bg-gray-600 cursor-pointer tooltip-bottom"
                data-tooltip="Show board description"
                data-tooltip-position="bottom"
              >
                <i className="far fa-info-circle text-md text-white"></i>
              </div>
              <div
                className="mr-4 rounded-md px-2 hover:bg-gray-600 cursor-pointer tooltip-bottom"
                data-tooltip="Add to favorites"
                data-tooltip-position="bottom"
              >
                <i className="far fa-star text-md text-white"></i>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#9799A6] text-sm">
                Add your board's description here
              </span>
              <HyperlinkText href="" text="See More" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <Button
                label="Invite / 1"
                btnType="outline-secondary"
                icon={{
                  position: "left",
                  className: "far fa-user-plus text-white text-xs",
                }}
              />
            </div>
            <div className="mr-4 rounded-md px-2 hover:bg-gray-600 cursor-pointer">
              <i className="far fa-ellipsis-h text-sm text-white"></i>
            </div>
          </div>
        </div>
        <div className="px-6 py-6">
          <Table
            customData={boardGroup}
            name="Query Group 1"
            color="#784BD1"
            onSelectedRows={(rows) => console.log({ rows })}
          >
            <TextField label="Project" source="project_name" />
            <TextField label="Task" source="task_name" />
            <TextField label="Status" source="status_name" />
          </Table>
          <Table
            customData={boardGroup}
            name="Query Group 1"
            color="#784BD1"
            onSelectedRows={(rows) => console.log({ rows })}
          >
            <TextField label="Project" source="project_name" />
            <TextField label="Task" source="task_name" />
            <TextField label="Status" source="status_name" />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
