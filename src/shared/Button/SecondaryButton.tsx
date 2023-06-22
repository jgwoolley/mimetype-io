import * as React from "react"
import { PropsWithChildren } from "react"
import * as classNames from "classnames"

interface SecondaryButtonProps {
    size?: "sm" | "md" | "lg"
    onClick?: () => void
    className?: string
}

export const SecondaryButton = ({
    children,
    size = "md",
    className,
    onClick,
}: PropsWithChildren<SecondaryButtonProps>) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                "rounded-md border border-slate-200 bg-white text-slate-500 shadow-sm",
                {
                    "px-4 py-2 text-sm": size === "lg",
                    "px-3 py-1 text-sm": size === "md",
                    "px-2 py-1 text-xs": size === "sm",
                },
                className
            )}
        >
            {children}
        </button>
    )
}
