import React from "react";

type SectionProps = {
    text: string
    children: React.ReactNode
}

const Section = ({text, children}: SectionProps) => {
    return (
        <div className={"max-h-80 h-full flex-1 p-5"}>
            <h2 className={"mb-4 h-8 uppercase opacity-40 text-sm font-medium tracking-widest"}>{text}</h2>
            {children}
        </div>
    )
}

export default Section;