import useAppData from "@/data/hook/useAppData"
import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface LayoutProps {
    title: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {topic} = useAppData()

    return (
        <div className={`${topic} flex h-full w-full`}>
            <SideMenu />
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full h-20 py-6 px-3 sm:p-6 text-white bg-[#04458e] dark:bg-[#0e1f4d]">
                    <Header title={props.title} />
                </div>
                <div className="h-full dark:bg-[#121212] dark:text-white">
                    <Content>{props.children}</Content>
                </div>
            </div>
        </div>
    )
}