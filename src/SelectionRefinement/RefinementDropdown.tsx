import * as React from 'react'
import { FaSearch } from 'react-icons/fa';
import IBaseModel from './IBaseModel';
import Highlighter from 'react-highlight-words'

interface IOwnProps<T> {
    results: T[]
    loading: boolean,
    filter?: string,
    resultsHeight?: number,
    showResults: boolean,
    onCancel: () => void
    itemSelected: (selectedResult: T) => void
}

export class RefinementDropdown<T extends IBaseModel> extends React.Component<IOwnProps<T>>{
    public render() {
        return (
            <>
                {
                    this.props.showResults ?
                        <>
                            <hr className="refinement-dropdown-divider" />
                            <div className="refinement-dropdown" style={{ maxHeight: this.props.resultsHeight ? this.props.resultsHeight : 250 }}>
                                {
                                    !this.props.loading ?
                                        this.props.results.length > 0 ? this.props.results.map(r =>
                                            <div key={r.id} className={`selection-item ${r.disabled ? "disabled" : ""}`} onClick={() => this.props.itemSelected(r)}>
                                                <label>
                                                    <span className="selection-item-left">{r.leftImage ? <img src={r.leftImage} width="24" height="24" /> : <FaSearch />}</span>
                                                    <Highlighter
                                                        highlightClassName="highlight"
                                                        searchWords={[this.props.filter]}
                                                        autoEscape={true}
                                                        textToHighlight={r.name}
                                                    />
                                                    {r.disabled ? "(coming soon)" : ""} 
                                                    <span className="refinement-right">{r.rightContent}</span>
                                                </label>
                                            </div>
                                        ) 
                                        :
                                        <div className="selection-item">
                                            <label>No results</label>
                                        </div>
                                    : null
                                }
                            </div>
                        </> :
                    null
                }
            </>
        )
    }
}