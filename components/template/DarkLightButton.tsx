import { useState } from "react";
import { Moon, Sun } from "../icons"

interface DarkLightButtonProps {
    topic: string | null;
    changeTopic: () => void
}

export default function DarkLightButton(props: DarkLightButtonProps) {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
      setAnimate(true);
      props.changeTopic();
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    };

    return props.topic === 'dark' ? (
        <div onClick={handleClick} className="flex items-center justify-center sm:justify-start cursor-pointer rounded-md sm:rounded-full p-1 bg-gradient-to-r from-yellow-300 to-yellow-600 w-8 sm:w-24 h-8">
            <div className={`flex items-center justify-center sm:bg-white sm:text-yellow-600 w-6 h-6 rounded-full sm:mr-2 ${animate ? 'animate-slide-right' : ''}`}>
                {Sun}
            </div>
            <div className="hidden sm:flex text-md">
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={handleClick} className="flex items-center justify-center sm:justify-end cursor-pointer rounded-md sm:rounded-full p-1 bg-gradient-to-r from-gray-500 to-gray-900 w-8 sm:w-24 h-8">
            <div className="hidden sm:flex text-md">
                <span>Escuro</span>
            </div>
            <div className={`flex items-center justify-center sm:bg-white sm:text-gray-500 w-6 h-6 rounded-full sm:ml-2 ${animate ? 'animate-slide-left' : ''}`}>
                {Moon}
            </div>
        </div>
    )
}