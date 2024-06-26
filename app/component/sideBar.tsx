'use client'
import Link from "next/link";
import { Icon_ClassicalIcon, Icon_AngryFace, Icon_gender, Icon_clownFace, Icon_flower, Icon_GI } from "public/icon"
import { useState } from "react";

const sideItems = {
    '/home': {
        name: 'home',
        icon: null
    },
    '/classical': {
        name: '典中典',
        icon: <Icon_ClassicalIcon />
    },
    '/aggression': {
        name: '攻击性',
        icon: <Icon_AngryFace />
    },
    '/gender': {
        name: '性别对立',
        icon: <Icon_gender />
    },
    '/joker': {
        name: '自嘲',
        icon: <Icon_clownFace />
    },
    '/china': {
        name: '种花',
        icon: <Icon_flower />
    },
    '/genshin': {
        name: '原神',
        icon: <Icon_GI />
    },
    '/faq': {
        name: 'About',
        icon: null
    }
}

export function Sidebar({ isOpen, toggleSidebar }) {
    const handleMenuItemClick = () => {
        toggleSidebar();
    }
    return (
        <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-56 h-screen pt-20 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-700 dark:border-gray-600`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-700">
                {Object.entries(sideItems).map(([path, { icon, name }]) => (
                    <Link
                        key={path}
                        href={path}
                        className="flex relative items-center rounded transition-all w-35 hover:text-neutral-800 hover:bg-gray-700 dark:hover:text-neutral-200 py-1 px-2 m-3"
                        onClick={handleMenuItemClick}
                    >
                        <span className="mr-1 mt-1 w-10 h-10">{icon}</span>
                        {name}
                    </Link>
                ))}
            </div>
        </aside>
    );
}