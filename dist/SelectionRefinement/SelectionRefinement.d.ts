import * as React from 'react';
import IBaseModel from './IBaseModel';
interface IOwnState {
    filter?: string;
    showResults: boolean;
}
interface IOwnProps<T> {
    filter: string;
    label: string;
    placeholder: string;
    filteredResults: T[];
    setFilterToItemName: boolean;
    loading: boolean;
    itemSelected: (item: T) => void;
    onCancel?: () => void;
    onChange: (filter: string) => void;
}
export declare class SelectionRefinement<T extends IBaseModel> extends React.Component<IOwnProps<T>, IOwnState> {
    private inputRef;
    constructor(props: IOwnProps<T>);
    render(): JSX.Element;
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: IOwnProps<T>, prevState: IOwnState) => void;
    private focusInput;
    private itemSelected;
    private onCancel;
}
export {};
