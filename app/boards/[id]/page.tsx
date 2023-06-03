"use client"
import MainBoard from '@/core/pages/boards/MainBoard'
import WorkspaceSidebar from '@/core/pages/workspace/WorkspaceSidebar'
import { useRouter, useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useParams()

  return (
    <>
      <WorkspaceSidebar /> 
      <MainBoard />
    </>
  )
}

export default page