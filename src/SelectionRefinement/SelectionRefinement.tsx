import * as React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Load } from '../Utils/Loader/Loader';
import IBaseModel from './IBaseModel';
import { RefinementDropdown } from './RefinementDropdown';
import { RefinementInput } from './RefinementInput';
import './SelectionRefinement.css'

interface IOwnState {
    filter?: string,
    showResults: boolean,
    loading: boolean,
    focus: boolean
}

interface IOwnProps<T> {
    filter?: string,
    label: string,
    placeholder: string,
    filteredResults: T[],
    setFilterToItemName: boolean,
    loading: boolean,
    resultsHeight?: number,
    focus?: boolean,
    delay?: number,
    itemSelected: (item: T) => void,
    onCancel?: () => void,
    onChange: (filter: string) => void
}

export class SelectionRefinement<T extends IBaseModel> extends React.Component<IOwnProps<T>, IOwnState> {

    constructor(props: IOwnProps<T>) {
        super(props);

        this.state = {
            filter: this.props.filter ?? "",
            showResults: false,
            loading: this.props.loading,
            focus: this.props.focus ?? false
        };
    }

    public render() {
        return (
            <div className="wrap-input100 validate-input m-b-23 selection-refinement">
                <span className="label-input100">{this.props.label}</span>
                <div className={this.state.showResults ? "refinement-search" : ""}>
                    <RefinementInput 
                        delay={this.props.delay} 
                        focus={this.props.focus} 
                        filter={this.state.filter} 
                        placeholder={this.props.placeholder} 
                        focused={(value: boolean) => this.setState({ focus: value })}
                        onChange={this.onChange} 
                    />
                    <span className="refinement-icon">
                    {
                        this.state.loading  ?
                            <Load inlineDisplay={true} smallSize={true} /> :
                        <>
                            <FaSearch className={this.state.focus ? "search-icon-focus" : "search-icon"} />
                            {this.state.showResults && <FaTimes className="refinement-right" onClick={() => this.onChange("")} />}
                        </>
                    }
                    </span>
                    <RefinementDropdown<T> 
                        filter={this.state.filter}
                        resultsHeight={this.props.resultsHeight} 
                        results={this.props.filteredResults} 
                        showResults={this.state.showResults} 
                        onCancel={this.onCancel} 
                        itemSelected={this.itemSelected}
                        loading={this.state.loading} 
                    />
                </div>
            </div>
        );
    }

    private onChange = (filter: string) => {
        this.setState({ filter: filter })
    }


    public componentDidUpdate = (prevProps: IOwnProps<T>, prevState: IOwnState) => {
        if (this.state.filter) {
            if ((this.state.filter.length < 3 || this.state.filter === "") && this.state.showResults) {
                this.setState({ showResults: false })
            }

            if (this.state.filter !== prevState.filter && this.state.filter.length > 2) {
                if (!this.state.showResults) {
                    this.setState({ showResults: true })
                }

                this.props.onChange(this.state.filter)
            }
        }
        else{
            if (this.state.showResults) {
                this.setState({ showResults: false })
            }
        }

        if (prevProps.loading !== this.props.loading) {
            const sameResults = JSON.stringify(this.props.filteredResults.map(i => i.id)) === JSON.stringify(prevProps.filteredResults.map(i => i.id));    

            if (this.props.filteredResults.length > 0 && prevProps.filteredResults.length > 0 && sameResults) {
                this.setState({ loading: false })
            }
            else {
                this.setState({ loading: this.props.loading })
            }
        }
    }


    private itemSelected = (selectedItem: T) => {
        if (selectedItem && !selectedItem.disabled) {
            this.props.itemSelected(selectedItem);

            this.setState({
                filter: this.props.setFilterToItemName ? selectedItem.name : "",
                showResults: false
            });
        }
    }

    private onCancel = () => {
        this.setState({
            filter: "",
            showResults: false
        });

        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
}