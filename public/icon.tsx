import Image from "next/image"

export function CollapseIcon() {
    return (
        <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>
    )
}

export function CrossIcon() {
    return (
        <svg
            className="h-8 me-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    )
}


export function TitleIcon() {
    return (
        <div className="dark:invert">
            <Image
                src='/webTitle.svg'
                width={100}
                height={90}
                alt="Title"
            />
        </div>
    )
}