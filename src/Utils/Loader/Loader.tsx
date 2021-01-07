import * as React from 'react';

interface IOwnProps {
    withBackground?: boolean
    inlineDisplay?: boolean,
    smallSize?: boolean,
}

export const Load: React.FC<IOwnProps> = (props) => {
    return (
      <>
        {
            props.withBackground ?
                <div id="cover-spin" style={{ display: "block" }} /> : 
                <div className={`loader ${props.smallSize ? "loader-small" : "loader-big"}`}  style={{ display: props.inlineDisplay ? "inline-block" : "block"}} />
        }
      </>
    )
}