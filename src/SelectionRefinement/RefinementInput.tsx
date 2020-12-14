import { debounce } from 'lodash';
import * as React from 'react'

interface IOwnProps {
    placeholder: string
    filter?: string,
    onChange: (filter: string) => void
}

interface IOwnState {
    filter: string
}

export class RefinementInput extends React.Component<IOwnProps, IOwnState> {

    public raiseDoSearchWhenUserStoppedTyping = debounce(() => {
        if (this.state.filter !== "") {
            this.props.onChange(this.state.filter);
        }
      }, 1000);

    private inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IOwnProps) {
        super(props);

        this.inputRef = React.createRef<HTMLInputElement>();
        this.state = {
            filter: this.props.filter !== undefined ? this.props.filter : "",
        };
    }
    

    public render = () => (
        <input
            className="form input100"
            type="text"
            ref={this.inputRef}
            defaultValue={this.state.filter}
            placeholder={this.props.placeholder}
            onKeyDown={this.handleKeyPress}
            onChange={this.handleCriteriaChange}
        />
    )

    public focus = () => {
        if (this.inputRef.current) {
            this.inputRef.current.focus()
        }
    }

    private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && this.state.filter !== "" && this.state.filter !== this.props.filter) {
            this.props.onChange(this.state.filter);
        }
    }

    private handleCriteriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 2) {

            this.setState({ filter: e.target.value }, () => {
                this.raiseDoSearchWhenUserStoppedTyping();
            });
        }
    };
}