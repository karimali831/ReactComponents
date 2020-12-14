import * as React from 'react';
import './ToggleSwitch.less';
interface IOwnProps {
    id: string;
    name: string;
    onText?: string;
    offText?: string;
    checked: boolean;
    disabled?: false;
    onChange: (checked: boolean) => void;
}
export declare const ToggleSwitch: React.FC<IOwnProps>;
export {};
