import useAppData from "@/data/hook/useAppData"
import DarkLightButton from "./DarkLightButton"
import Title from "./Title"

interface HeaderProps {
    title: string
}

export default function Header(props: HeaderProps) {
    const {topic, changeTopic} = useAppData()

    return (
        <div className="flex">
            <Title title={props.title} />
            <div className="flex flex-grow justify-end">
                {changeTopic && <DarkLightButton topic={topic} changeTopic={changeTopic} />}
            </div>
        </div>
    )
}