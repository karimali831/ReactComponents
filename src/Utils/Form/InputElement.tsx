import * as React from "react";

interface IOwnProps {
    label: string;
    icon: string;
    required?: boolean;
    id: string;
    focus?: boolean;
    disabled?: boolean;
    numberInput?: boolean;
    passwordInput?: boolean;
    value?: string;
    defaultValue?: string;
    styles?: React.CSSProperties;
    autoComplete?: string;
    placeHolder?: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface IOwnState {
    value?: string;
}

export class InputElement extends React.Component<IOwnProps, IOwnState> {
    constructor(props: IOwnProps) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }

    public componentDidUpdate = (prevProps: IOwnProps) => {
        if (this.props.value && prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    };

    public render() {
        return (
            <div className="wrap-input100 m-b-23" style={this.props.styles}>
                {this.props.label !== "" && (
                    <span className="label-input100">{this.props.label}</span>
                )}
                <input
                    type={
                        this.props.numberInput
                            ? "number"
                            : this.props.passwordInput
                            ? "password"
                            : "text"
                    }
                    autoFocus={this.props.focus}
                    id={this.props.id}
                    placeholder={this.props.placeHolder}
                    value={this.state.value}
                    autoComplete={this.props.autoComplete ?? "off"}
                    defaultValue={this.props.defaultValue}
                    onKeyDown={this.props.onKeyPress}
                    name={this.props.id}
                    className="form input100"
                    onChange={this.props.onInputChange}
                    required={this.props.required}
                    disabled={this.props.disabled}
                />
                <span
                    className="focus-input100"
                    data-symbol={this.props.icon}
                />
            </div>
        );
    }
}
