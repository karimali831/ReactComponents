import * as React from 'react';
import { FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { Variant } from '../Enums/Variant';
import './Modal.css'

interface IOwnState {
  show: boolean
}

interface IOwnProps {
    headerText?: string,
    bodyContent: JSX.Element,
    confirmBtnTxt?: string,
    cancelBtnTxt?: string,
    show: boolean,
    variant?: Variant,
    handleAction: (confirm: boolean) => void
}

export class ConfirmModal extends React.Component<IOwnProps, IOwnState> {

    constructor(props: IOwnProps) {
        super(props);

        this.state = {
            show: this.props.show
        };
    }


    public render() {
        let icon = null;
        let headerTxt = null;
        let style;

        switch(this.props.variant) {

            case Variant.Warning:
                icon = <FaExclamationTriangle />;
                style = "#ffc107";
                headerTxt = "Warning";
                break;

            case Variant.Danger:
                icon = <FaExclamationTriangle />;
                style = "#dc3545";
                headerTxt = "Warning";
                break;

            case Variant.Primary:
                style = "#09c";
                headerTxt = "Information";
                icon = <FaInfoCircle />;
                break;

            default:
                style = "#09c";
                headerTxt = "Information";
                icon = <FaInfoCircle />;
        }

        return (
            <div className={`${this.state.show ? "modal d-block" : "modal d-none"} bootstrap-dialog`} tabIndex={-1} role="dialogue">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: style }}>
                            <div className="bootstrap-dialog-title">{icon} {this.props.headerText ?? headerTxt}</div>
                            <button type="button" onClick={() => this.handleAction(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button> 
                        </div>
                        <div className="modal-body">
                            <div className="bootstrap-dialog-body">
                                <div className="bootstrap-dialog-message">{this.props.bodyContent}</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => this.handleAction(true)}>
                                {this.props.confirmBtnTxt ?? "Confirm"} 
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.handleAction(false)}>
                                {this.props.cancelBtnTxt ?? "Close"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private handleAction= (confirm: boolean) => {
        this.props.handleAction(confirm);
        this.setState({ show: false })
    }
}