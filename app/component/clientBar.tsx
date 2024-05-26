'use client'
import { useState } from "react";
import { Navbar } from "./navBar";
import { Sidebar } from "./sideBar";


export function ClientLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="relative min-h-screen flex">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className="flex-auto min-w-0 mt-20 mx-4 lg:ml-72 flex flex-col px-2 md:px-0">
                {children}
            </main>
        </div>
    );
}
