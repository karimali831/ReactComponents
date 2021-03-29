import * as React from 'react';

interface IOwnProps {
    avatar: string,
    rootUrl: string,
    size: string,
    margin?: number,
    styles?: React.CSSProperties,
    content?: JSX.Element
}

export const UserAvatar: React.FC<IOwnProps> = (props) => {

    const size = (size: string) : React.CSSProperties => {
        if (size === "xx-small") {
            return { width: 18, height: 18, fontSize: 9 }
        }
        else if (size === "x-small") {
            return { width: 24, height: 24, fontSize: 12 }
        }
        else if (size === "small") {
            return { width: 32, height: 32, fontSize: 16 }
        }
        else if (size === "medium") {
            return { width: 48, height: 48, fontSize: 24 }
        }
        else if (size === "large") {
            return { width: 64, height: 64, fontSize: 32 }
        }
        else if (size === "x-large") {
            return { width: 128, height: 128, fontSize: 48 }
        }

        return { width: 32, height: 32, fontSize: 16 }
    }

    return (
        props.avatar.length === 2 ?
            <p style={{...size(props.size), ...props.styles, margin: props.margin ?? 0 }} default-avatar={props.avatar}> {props.content}</p> :
            <><img style={{...size(props.size), ...props.styles}} src={props.rootUrl + props.avatar} /> {props.content}</>  
    )
}