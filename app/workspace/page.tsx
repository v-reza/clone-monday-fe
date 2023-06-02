"use client";
import MainWorkspace from "@/core/pages/workspace/MainWorkspace";
import WorkspaceSidebar from "@/core/pages/workspace/WorkspaceSidebar";
import React from "react";

const Workspace = () => {
  return (
    <>
      <WorkspaceSidebar />
      <MainWorkspace />
    </>
  );
};

export default Workspace;
