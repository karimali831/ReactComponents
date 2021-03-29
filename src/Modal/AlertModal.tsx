import * as React from 'react';
import { FaCheck, FaExclamationTriangle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { Variant } from '../Enums/Variant';
import './Modal.css'

export interface IOwnState {
  show: boolean
}

export interface IOwnProps {
    show: boolean,
    text: string,
    timeout?: number,
    variant?: Variant,
    handleClose: () => void
}

export class AlertModal extends React.Component<IOwnProps, IOwnState> {
    constructor(props: IOwnProps) {
        super(props);

        this.state = {
            show: this.props.show
        };
    }

    public componentDidMount = () => {
        if (this.state.show) {
                setTimeout(() => { this.handleClose()
            }, this.props.timeout ? 
            this.props.timeout : this.props.variant === Variant.Success ? 1200 : 5000);
        }
    }

    public render() {
        let icon = null;
        let style;

        switch(this.props.variant) {
            case Variant.Info:
                icon = <FaInfoCircle />;
                style = "info";
                break;

            case Variant.Primary:
                icon = <FaInfoCircle />;
                style = "primary";
                break;

            case Variant.Success:
                icon = <FaCheck />;
                style = "success";
                break;

            case Variant.Warning:
                icon = <FaExclamationTriangle />;
                style = "warning";
                break;

            case Variant.Danger:
                icon = <FaTimes />;
                style = "danger";
                break;

            default:
                style = "primary";
                icon = <FaCheck />;
        }

        return (
            <div className={this.state.show ? "modal d-block" : "modal d-none"}>
                <div className="modal-container">
                    <div className={`alert alert-${style}`} role="alert">
                        {icon} {this.props.text}
                    </div>
                </div>
            </div>
        );
    }

    private handleClose = () => {
        this.props.handleClose();
        this.setState({ show: false })
    }
}