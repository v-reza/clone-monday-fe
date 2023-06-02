"use client";
import React from "react";
import defaultCover from "@assets/images/default-main-workspace.png";
import Image from "next/image";
import { getRandomHexColor } from "@/src/utils/functions";
import { Avatar, Tab } from "@/src/components";
import RecentlyBoard from "./components/RecentlyBoard";
import { useAppSelector } from "@/src/hooks";
import { workspaceSelector } from "@/src/redux/reducer/workspaceSidebar";
import clsx from "clsx";
type NameWithIconProps = {
  description?: React.ReactNode;
};
const NameWithIcon = (props: NameWithIconProps) => {
  return (
    <div className="-top-24">
      <div
        className="relative p-[2.10rem] px-[2.5rem] rounded-[1.8rem] w-full border-4 border-white"
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className="text-white text-2xl">M</span>

        <div className="absolute left-20 top-[4.6rem]">
          <div className="flex space-x-4 w-full">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22795 4.46279L5.35212 1.27593C5.35233 1.27578 5.35192 1.27609 5.35212 1.27593C5.3522 1.27587 5.35288 1.27535 5.35295 1.27529C5.68131 1.02149 6.0846 0.883789 6.49962 0.883789C6.91465 0.883789 7.31794 1.02149 7.6463 1.27529C7.64654 1.27548 7.64605 1.2751 7.6463 1.27529C7.64633 1.27532 7.64709 1.2759 7.64713 1.27593L11.7706 4.46227C11.9971 4.63725 12.1812 4.86228 12.3075 5.11913C12.434 5.37624 12.4998 5.6589 12.5 5.9454V12.0088C12.5 12.5061 12.3025 12.983 11.9508 13.3347C11.5992 13.6863 11.1223 13.8838 10.625 13.8838H7.625C7.20885 13.8838 6.80855 13.7301 6.5 13.4541C6.19145 13.7301 5.79115 13.8838 5.375 13.8838H2.375C1.87772 13.8838 1.40081 13.6863 1.04917 13.3347C0.697543 12.983 0.5 12.5061 0.5 12.0088V5.94652C0.5 5.94646 0.5 5.94658 0.5 5.94652C0.499948 5.66079 0.565197 5.37865 0.690772 5.12198C0.816548 4.86491 0.999504 4.64003 1.22563 4.46459L1.22795 4.46279ZM2 5.94634C1.99995 5.8891 2.013 5.83261 2.03815 5.7812C2.06331 5.72978 2.0999 5.68481 2.14513 5.64972L6.27012 2.46222C6.33583 2.41138 6.41655 2.38379 6.49962 2.38379C6.5827 2.38379 6.66342 2.41138 6.72913 2.46222L10.8541 5.64972C10.8995 5.68473 10.9362 5.72967 10.9615 5.78109C10.9868 5.83251 11 5.88904 11 5.94634V12.0088C11 12.1083 10.9605 12.2037 10.8902 12.274C10.8198 12.3443 10.7245 12.3838 10.625 12.3838H7.625C7.57527 12.3838 7.52758 12.3641 7.49242 12.3289C7.45725 12.2938 7.4375 12.2461 7.4375 12.1963V9.50884C7.4375 9.2602 7.33873 9.02175 7.16291 8.84593C6.9871 8.67011 6.74864 8.57134 6.5 8.57134C6.25136 8.57134 6.0129 8.67011 5.83709 8.84593C5.66127 9.02175 5.5625 9.2602 5.5625 9.50884V12.1963C5.5625 12.2461 5.54275 12.2938 5.50758 12.3289C5.47242 12.3641 5.42473 12.3838 5.375 12.3838H2.375C2.27554 12.3838 2.18016 12.3443 2.10984 12.274C2.03951 12.2037 2 12.1083 2 12.0088V5.94634Z"
                  fill="white"
                ></path>
                <path
                  d="M11 5.94634C11 5.88904 10.9868 5.83251 10.9615 5.78109C10.9362 5.72967 10.8995 5.68473 10.8541 5.64972L6.72913 2.46222C6.66342 2.41138 6.5827 2.38379 6.49962 2.38379C6.41655 2.38379 6.33583 2.41138 6.27012 2.46222L2.14513 5.64972C2.0999 5.68481 2.06331 5.72978 2.03815 5.7812C2.013 5.83261 1.99995 5.8891 2 5.94634V12.0088C2 12.1083 2.03951 12.2037 2.10984 12.274C2.18016 12.3443 2.27554 12.3838 2.375 12.3838H5.375C5.42473 12.3838 5.47242 12.3641 5.50758 12.3289C5.54275 12.2938 5.5625 12.2461 5.5625 12.1963V9.50884C5.5625 9.2602 5.66127 9.02175 5.83709 8.84593C6.0129 8.67011 6.25136 8.57134 6.5 8.57134C6.74864 8.57134 6.9871 8.67011 7.16291 8.84593C7.33873 9.02175 7.4375 9.2602 7.4375 9.50884V12.1963C7.4375 12.2461 7.45725 12.2938 7.49242 12.3289C7.52758 12.3641 7.57527 12.3838 7.625 12.3838H10.625C10.7245 12.3838 10.8198 12.3443 10.8902 12.274C10.9605 12.2037 11 12.1083 11 12.0088V5.94634Z"
                  fill="#323338"
                ></path>
              </svg>
            </div>
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

const DescriptionWorkspace = () => {
  return (
    <>
      <div className="w-max flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-white text-2xl font-medium">
            Main Workspace
          </span>

          <div className="mr-4 rounded-md px-2 hover:bg-gray-600 cursor-pointer">
            <i className="far fa-ellipsis-h text-sm text-white"></i>
          </div>
        </div>
        <p className="text-[#9799A6] text-sm">
          Use the Main Workspace to manage and collaborate on all company-wide
          boards. All team members are in this workspace.
        </p>
      </div>
    </>
  );
};

const MainWorkspace = () => {

  const { isOpen } = useAppSelector(workspaceSelector)
  return (
    <div>
      <div className="relative w-full h-full">
        <Image
          priority
          alt="cover"
          src={defaultCover}
          width={10000}
          height={90}
        />
        <div className={clsx("absolute top-[13rem] z-10 left-20 transition-all", {
          "top-[17rem]": !isOpen
        })}>
          <NameWithIcon description={<DescriptionWorkspace />} />
        </div>
        <div className="px-20 mt-32 w-full">
          <Tab>
            <Tab.Item label="Recent Boards">
              <div className="mt-4 flex flex-col space-y-4">
                <div>
                  <span className="text-[#838594] text-sm">
                    Boards and dashboards you visited recently in this workspace
                  </span>
                </div>
                <RecentlyBoard name="Board 1"/>
              </div>
            </Tab.Item>
            <Tab.Item label="Members">
              <div className="mt-4 flex flex-col space-y-4">
                <span className="text-md font-medium text-white">Members / 1</span>
                <div className="flex items-center space-x-2">
                  <Avatar size="large" name="M Zulfi"/>
                  <span className="text-md font-medium text-white">M Zulfi</span>
                </div>
              </div>
            </Tab.Item>
          </Tab>
        </div>
      </div>
    </div>
  );
};

export default MainWorkspace;
