import * as React from 'react'
import { Load } from '../Utils/Loader/Loader';
import IBaseModel from './IBaseModel';

interface IOwnProps<T> {
    results: T[]
    onCancel: () => void
    itemSelected: (selectedResult: T) => void
    loading: boolean,
    resultsHeight?: number,
    showResults: boolean
}

export class RefinementDropdown<T extends IBaseModel> extends React.Component<IOwnProps<T>>{

    public render() {
        return (
            <>
                {this.props.showResults || this.props.loading ?
                        <div className="refinement-dropdown" style={{ overflowY: "auto", overflowX: "hidden", maxHeight: this.props.resultsHeight !== undefined ? this.props.resultsHeight : 250 }}>
                            {!this.props.loading ?
                                this.props.results.map(r =>
                                    <div key={r.id} className={`selection-item ${r.disabled ? "disabled" : ""}`} onClick={() => this.props.itemSelected(r)}>
                                        <label>{r.name} {r.disabled ? "(coming soon)" : ""} </label>
                                    </div>
                                ) :
                                <Load inlineDisplay={true} smallSize={true} />
                            }
                        </div> :
                    null
                }
            </>
        )
    }
}