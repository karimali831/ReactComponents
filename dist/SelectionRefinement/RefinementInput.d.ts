/// <reference types="lodash" />
import * as React from 'react';
interface IOwnProps {
    placeholder: string;
    filter?: string;
    onChange: (filter: string) => void;
}
interface IOwnState {
    filter: string;
}
export declare class RefinementInput extends React.Component<IOwnProps, IOwnState> {
    raiseDoSearchWhenUserStoppedTyping: import("lodash").DebouncedFunc<() => void>;
    private inputRef;
    constructor(props: IOwnProps);
    render: () => JSX.Element;
    focus: () => void;
    private handleKeyPress;
    private handleCriteriaChange;
}
export {};
