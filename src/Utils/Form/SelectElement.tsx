import * as React from 'react';
import { Load } from '../..';
import IBaseModel from '../../SelectionRefinement/IBaseModel';

interface IOwnState {
    selectedValue: string
}

interface IOwnProps {
    label: string,
    icon: string,
    id: string,
    selectorOptions: IBaseModel[],
    selectorName?: string,
    focus?: boolean,
    selected?: string,
    loading?: boolean,
    required?: boolean,
    disabled?: boolean,
    styles?: React.CSSProperties,
    onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export class SelectElement extends React.Component<IOwnProps, IOwnState> {
    constructor(props: IOwnProps) {
        super(props);

        this.state = {
            selectedValue: this.props.selected ??  ""
        };
    }

    public componentDidUpdate = (prevProps: IOwnProps, prevState: IOwnState) => {
        if (prevProps.selected !== this.props.selected && this.props.selected !== undefined) {
            this.setState({ selectedValue: this.props.selected ?? "" })
        }
    }

    public render() {
        return (
            <div className="wrap-input100 m-b-23" style={this.props.styles}>
                <span className="label-input100">{this.props.label}</span>
                <select 
                    id={this.props.id} 
                    autoFocus={this.props.focus}
                    name={this.props.id}
                    value={this.state.selectedValue}
                    className="form input100" 
                    onChange={this.handleSelectChange} 
                    required={this.props.required} 
                    disabled={this.props.disabled}>
                        {
                            this.props.selectorName !== undefined ?
                                <option value="">{this.props.selectorName}</option> 
                            : null
                        }
                        {
                            this.props.selectorOptions != null && this.props.selectorOptions.map(u => (
                                <option key={u.id} disabled={u.disabled} value={u.id}>{u.name}</option>
                            ))
                        }
                </select>
                {
                    this.props.loading ?
                        <span style={{ position: "absolute", display: "block", top: 43, left: 12 }}>
                            {this.props.loading ? <Load smallSize={true} inlineDisplay={true} /> : null}
                        </span>
                    :   
                        <span className="focus-input100" data-symbol={this.props.icon} />
                }
            </div>
          );
    }

    private handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedValue: e.target.value })
        this.props.onSelectChange(e);
    }
}