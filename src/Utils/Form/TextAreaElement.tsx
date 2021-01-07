import * as React from 'react';

interface IOwnProps {
    label: string,
    icon: string,
    id: string,
    required?: boolean,
    textAreaRows?: number,
    disabled?: boolean,
    value?: string,
    defaultValue?: string,
    styles?: React.CSSProperties,
    onTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}


export const TextAreaElement: React.FC<IOwnProps> = (props) => {
    return (
        <div className="wrap-input100 m-b-23" style={props.styles}>
            <span className="label-input100">{props.label}</span>
            <textarea 
                id={props.id} 
                name={props.id} 
                value={props.value} 
                rows={props.textAreaRows} 
                defaultValue={props.defaultValue}
                className="form input100" 
                onChange={props.onTextAreaChange} 
                required={props.required} 
                disabled={props.disabled} 
            />
            <span className="focus-input100" data-symbol={props.icon} />
        </div>
      );
}