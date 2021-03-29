import { debounce } from 'lodash';
import * as React from 'react'

interface IOwnProps {
    placeholder: string
    filter?: string,
    focus?: boolean,
    delay?: number,
    onChange: (filter: string) => void,
    focused: (value: boolean) => void
}

interface IOwnState {
    filter: string
}

export class RefinementInput extends React.Component<IOwnProps, IOwnState> {

    public raiseDoSearchWhenUserStoppedTyping = debounce(() => {
        if (this.state.filter !== "") {
            this.props.onChange(this.state.filter);
        }
    }, this.props.delay ?? 300);

    private inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IOwnProps) {
        super(props);

        this.inputRef = React.createRef<HTMLInputElement>();

        this.state = {
            filter: this.props.filter ?? ""
        };
    }

    public componentDidMount() {
        this.focus();
    }
    
    public componentDidUpdate = (prevProps: IOwnProps, prevState: IOwnState) => {
        if (prevProps.filter !== this.props.filter && this.props.filter !== undefined) {
            this.setState({ filter: this.props.filter })
        }
    }
    
    public render = () => (
        <input
            className="form input100"
            style={{ marginBottom: -25 }}
            autoComplete="off"
            type="text"
            ref={this.inputRef}
            value={this.state.filter}
            placeholder={this.props.placeholder}
            onFocus={() => this.props.focused(true)}
            onBlur={() => this.props.focused(false)}
            onKeyDown={this.handleKeyPress}
            onChange={this.handleCriteriaChange}
        />
    )

    public focus = () => {
        if (this.inputRef.current && this.props.focus) {
            this.inputRef.current.focus()
        }
    }

    private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && this.state.filter !== "" && this.state.filter !== this.props.filter) {
            this.props.onChange(this.state.filter);
        }
    }

    private handleCriteriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filter = e.target.value;

        if (filter.length < 3) {
            this.props.onChange(filter);
        }
        else{
            this.setState({ filter: e.target.value }, () => {
                this.raiseDoSearchWhenUserStoppedTyping();
            })
        }
    };
}