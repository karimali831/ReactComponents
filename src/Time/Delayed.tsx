import * as React from 'react';

interface IOwnState {
    hidden: boolean
}

 interface IOwnProps {
    waitBeforeShow: number
}

export class Delayed extends React.Component<IOwnProps, IOwnState> {

    constructor(props: IOwnProps) {
        super(props);

        this.state = {
            hidden: true
        };
    }

    public componentDidMount() {
        setTimeout(() => {
            this.setState({ hidden: false });
        }, this.props.waitBeforeShow);
    }

    public componentDidUpdate = (prevProps: IOwnProps, prevState: IOwnState) => {

    }

    public render() {
        return this.state.hidden ? '' : this.props.children;
    }
}