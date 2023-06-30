import Link from "next/link"


interface MenuItemProps {
    url: string
    text: string
    icon: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className="hover:bg-[#173586]">
            <Link href={props.url}>
                <div className="flex justify-center items-center w-full h-20">{props.icon}</div>
                <span className="text-white text-sm flex justify-center items-center -mt-2 mb-2">{props.text}</span>
            </Link>

        </li>
    )
}