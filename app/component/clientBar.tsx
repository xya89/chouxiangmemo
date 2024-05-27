'use client'
import { useState } from "react";
import { Navbar } from "./navBar";
import { Sidebar } from "./sideBar";


export function ClientBar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="relative min-h-screen flex">
            <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}
