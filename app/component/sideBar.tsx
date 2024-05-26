'use client'
import { useRouter } from "next/router"
import Link from "next/link";

const sideItems = {
    '/': {
        name: 'home'
    },
    '/典中典': {
        name: '典中典'
    },
    '/攻击性': {
        name: '攻击性'
    },
    '/性别对立': {
        name: '性别对立'
    },
    '/自嘲': {
        name: '自嘲'
    },
    '/种花': {
        name: '种花'
    },
    '/原神': {
        name: '原神'
    },
}

export function Sidebar({ isOpen, toggleSidebar }) {

    return (
        <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                {Object.entries(sideItems).map(([path, { name }]) => (
                    <Link
                        key={path}
                        href={path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </aside>
    );
}