import LeftSidebar from '@/components/shared/LeftSidebar/LeftSidebar';
import Navbar from '@/components/shared/Navbar/Navbar';
import RightSidebar from '@/components/shared/RightSidebar/RightSidebar';
import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
    <Navbar />

<div className="flex">
  <LeftSidebar />

  <section className="flex min-h-screen flex-1 flex-colpx-6 pb-6 pt-28 xs:px-2 sm:px-10 md:px-6 md:pb-10">
    <div className="mx-auto w-full">{ children }</div>
  </section>
  
  <RightSidebar />
</div>
      
    </>
  )
}

export default MainLayout
