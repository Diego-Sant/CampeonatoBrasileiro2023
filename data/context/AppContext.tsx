import { createContext, useState } from "react";

type Topic = 'dark' | '';

interface AppContextProps {
  topic: Topic | null;
  changeTopic?: () => void | null;
}

const AppContext = createContext<AppContextProps>({
  topic: '',
  changeTopic: () => null
});

export function AppProvider(props: any) {
    const [topic, setTopic] = useState<Topic>('')

    const changeTopic = () => {
        setTopic(topic === "" ? 'dark' : "")
    }

    return (
        <AppContext.Provider value={{
            topic, changeTopic
        }}>{props.children}</AppContext.Provider>
    )
}

export default AppContext