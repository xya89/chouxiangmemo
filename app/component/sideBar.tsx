'use client'
import Link from "next/link"
import { useState } from "react"
import { CollapseIcon, CrossIcon } from "@/public/icon"

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

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleMenuItemClick = () => {
        setIsOpen(false);
    }

    return (

        <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-64 bg-gray-700 text-white p-2 lg:p-4 shadow-lg z-50">
            <div className="lg:hidden flex justify-between items-center mb-4">
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                    {!isOpen ? <CollapseIcon /> : <CrossIcon />}
                </button>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-2`}>
                {Object.entries(sideItems).map(([path, { name }]) => (
                    <Link
                        key={path}
                        href={path}
                        className="block transition-all hover:text-neutral-300 py-2 px-4 rounded-md"
                        onClick={() => setIsOpen(false)}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
