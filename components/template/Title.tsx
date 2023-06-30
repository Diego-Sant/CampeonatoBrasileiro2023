import SideMenu from "./SideMenu"

interface TitleProps {
    title: string
}

export default function Title(props: TitleProps) {
    return (
        <div className="flex justify-center items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">{props.title}</h1>
        </div>
    )
}