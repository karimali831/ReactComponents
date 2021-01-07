import * as React from 'react';

interface IOwnProps {
    label: string,
    icon: string,
    required?: boolean,
    id: string,
    disabled?: boolean,
    numberInput?: boolean,
    value?: string,
    defaultValue?: string,
    styles?: React.CSSProperties,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const InputElement: React.FC<IOwnProps> = (props) => {
    return (
        <div className="wrap-input100 m-b-23" style={props.styles}>
            <span className="label-input100">{props.label}</span>
            <input 
                type={props.numberInput ? "number" : "text"} 
                id={props.id} 
                value={props.value} 
                defaultValue={props.defaultValue} 
                name={props.id} 
                className="form input100" 
                onChange={props.onInputChange} 
                required={props.required} 
                disabled={props.disabled}
            />
            <span className="focus-input100" data-symbol={props.icon} />
        </div>
      );
}