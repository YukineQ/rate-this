import React from "react";

type CopyToClipboardProps = {
    textToCopy: string;
    onCopy?: () => void;
    children: React.ReactElement;
}

export const CopyToClipboard = (props: CopyToClipboardProps) => {
    const { textToCopy = '', onCopy, children } = props

    const copy = async () => {
        await navigator.clipboard.writeText(textToCopy)
        if (onCopy) {
            onCopy()
        }
    }

    const elem = React.Children.only(children)

    return React.cloneElement(elem, { onClick: copy })
}