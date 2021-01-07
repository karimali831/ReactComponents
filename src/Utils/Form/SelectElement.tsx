import * as React from 'react';
import { Load } from '../..';

interface IOwnState {
    selectedValue: string
}

interface IOwnProps {
    label: string,
    icon: string,
    id: string,
    selectorOptions: any[],
    selectorName?: string,
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
            selectedValue: this.props.selected !== undefined ? this.props.selected : ""
        };
    }

    public render() {
        return (
            <div className="wrap-input100 m-b-23" style={this.props.styles}>
                <span className="label-input100">{this.props.label}</span>
                <select 
                    id={this.props.id} 
                    name={this.props.id}
                    value={this.state.selectedValue}
                    className="form input100" 
                    onChange={this.handleSelectChange} 
                    required={this.props.required} 
                    disabled={this.props.disabled}>
                        <option value="">{this.props.selectorName !== undefined ? this.props.selectorName : `-- Select ${this.props.label} --`}</option>
                        {
                            this.props.selectorOptions != null && this.props.selectorOptions.map(u => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))
                        }
                </select>
                <span className="focus-input100" data-symbol={this.props.icon} />
                {this.props.loading ? <Load smallSize={true} inlineDisplay={true} /> : null}
            </div>
          );
    }

    private handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedValue: e.target.value })
        this.props.onSelectChange(e);
    }
}