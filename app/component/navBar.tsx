import { Icon_TitleIcon, Icon_CollapseIcon } from "public/icon"
import Link from "next/link"

export function Navbar({ toggleSidebar }) {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:boarder-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-start rtl:justify-end">
                    <button
                        onClick={toggleSidebar}
                        aria-controls="logo-sidebar"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <span
                            className="w-6 h-6"
                        >
                            <Icon_CollapseIcon />
                        </span>
                    </button>
                    <Link href={"/"}>
                        <Icon_TitleIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}