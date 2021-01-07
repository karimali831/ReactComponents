import * as React from 'react'
;
interface IOwnState {

}

interface IOwnProps {

}


export class EmptyStateComponent extends React.Component<IOwnProps, IOwnState> {

    constructor(props: IOwnProps) {
        super(props);

        this.state = {

        };
    }
    public render() {
        return (
            <div />


        );
    }

}