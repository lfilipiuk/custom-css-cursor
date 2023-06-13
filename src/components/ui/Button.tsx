import React from "react";

type ButtonProps = {
    className?: string
    children: React.ReactNode
}

const Button = ({ className, children } : ButtonProps) => (
    <button className={`cursor-none text-xl rounded-full w-4/5 p-2 font-medium ${className}`}>
        {children}
    </button>
);

export default Button;