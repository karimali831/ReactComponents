import * as React from 'react';
import IBaseModel from './IBaseModel';
interface IOwnProps<T> {
    results: T[];
    onCancel: () => void;
    itemSelected: (selectedResult: T) => void;
    loading: boolean;
    showResults: boolean;
}
export declare class RefinementDropdown<T extends IBaseModel> extends React.Component<IOwnProps<T>> {
    render(): JSX.Element;
}
export {};
