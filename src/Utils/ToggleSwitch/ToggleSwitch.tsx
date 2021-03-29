import * as React from 'react';
import './ToggleSwitch.less';

interface IOwnProps {
    id: string
    name: string;
    onText?: string;
    offText?: string;
    checked: boolean;
    disabled?: boolean;
    inline?: boolean;
    onChange: (checked: boolean) => void
}

export const ToggleSwitch: React.FC<IOwnProps> = (props) => {
    return (
        <div style={{ display: props.inline ? "inline" : "block" }}>
          <div className="toggle-switch small-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              id={props.id}
              name={props.name}
              checked={props.checked}
              onChange={e => props.onChange(e.target.checked)}
              disabled={props.disabled}
            />
            {props.id ? (
              <label className="toggle-switch-label" htmlFor={props.id}>
                <span
                  className={
                    props.disabled
                      ? "toggle-switch-inner toggle-switch-disabled"
                      : "toggle-switch-inner"
                  }
                  data-yes={props.onText !== null ? props.onText : "On"}
                  data-no={props.offText !== null ? props.offText : "Off"}
                />
                <span
                  className={
                  props.disabled
                    ? "toggle-switch-switch toggle-switch-disabled"
                    : "toggle-switch-switch"
                  }
                />
              </label>
            ) : null}
          </div>
          <span className="label-input100" style={{ marginRight: 5 }}>{props.name}</span>
        </div>
      );
}