import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex h-full w-full">
            <SideMenu />
            <div className="flex flex-col w-full p-7 text-white bg-[#04458e] dark:bg-[#0e1f4d]">
                <Header title={props.title} subtitle={props.subtitle} />
                <Content>{props.children}</Content>
            </div>
        </div>
    )
}