import * as React from 'react';

export interface IPropsFromDispatch {}

export interface IPropsFromState {}

export interface IOwnState {}

export interface IOwnProps {}

type AllProps = IPropsFromDispatch & IPropsFromState & IOwnProps

export class EmptyStateComponent extends React.Component<IOwnProps, IOwnState> {

    constructor(props: IOwnProps) {
        super(props);

        this.state = {

        };
    }

    public componentDidMount() {
        
    }

    public componentDidUpdate = (prevProps: AllProps, prevState: IOwnState) => {

    }

    public render() {
        return (
            <div />


        );
    }
}