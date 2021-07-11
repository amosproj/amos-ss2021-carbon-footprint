import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * a drop down component for selecting a scenario
 */
class SelectScenarioComponent extends Component {
    state = {
        secondScenario: '', // TODO: for comparing scenarios this should be removed and use props from detail component
        scenarios: [{ id: '', name: '' }]
    };

    /**
     * in this function a callback function
     * in DetailsComponent should be called
     * in order to send a new calculation request
     * based on new selected scenario
     *
     * @param item: selected scenario
     */
    onDropDownItemSelectedHandler = (item) => {
        this.props.newScenarioHandler(item);
    };

    onSecondDropDownSelectedHandler = (name) => {
        const secondScenario = name;
        this.setState({ secondScenario: secondScenario });
    };

    /**
     * once this component is created this function is called
     * before render method
     */
    componentDidMount = () => {
        this.setState(this.updateStateScenario());
    };

    /**
     * by this function the scenario list will be
     * updated based on the available scenarios in
     * scenario list
     *
     * @returns the updated state
     */
    updateStateScenario = () => {
        let scenarioList = [];
        // Handle the first element (baseline)
        scenarioList.push({
            id: this.props.selectedProduct.productID,
            name: this.props.selectedProduct.scenarioType
        });
        let secondaryScenarioList = this.props.selectedProduct.scenarioList;

        // Handle the scenarioList of the baseline (if any)
        for (let index = 0; index < secondaryScenarioList.length; index++) {
            const product = secondaryScenarioList[index];
            scenarioList.push({ id: product.productID, name: product.scenarioType });
        }

        // Set State to the calculated List
        let newState = {
            selectedSecondScenario: '',
            scenarios: scenarioList
        };
        return newState;
    };

    render() {
        /*
        if the loadComparePage state from its parrent (the detail Component) 
        is set to true, here an extra drop down for the second variable
         should be rendered 
        */

        return (
            <div className='w3-row w3-margin-top'>
                <div className='w3-right'>
                    <div className='w3-dropdown-hover w3-white'>
                        <button className='w3-button dropDown'>
                            {this.props.selectedScenarioType}
                        </button>
                        <div className='w3-dropdown-content w3-bar-block w3-border dropDown'>
                            {this.state.scenarios.map((item) => (
                                <button
                                    onClick={() => this.onDropDownItemSelectedHandler(item)}
                                    className='w3-bar-item w3-button dropDown'
                                    key={item.id}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SelectScenarioComponent.propTypes = {
    newScenarioHandler: PropTypes.func,
    selectedScenarioType: PropTypes.string,
    selectedProduct: PropTypes.shape({
        categories: PropTypes.array, // [(categories.generation, categories.transmission)],
        modelID: PropTypes.string, // 'none',
        modelName: PropTypes.string, // 'please select a Product',
        productID: PropTypes.string.isRequired, // 'dummydum-13b0-4e09-9fb4-50398483ecfd'
        productImage: PropTypes.string, //ImagePath?
        productName: PropTypes.string, //'please select a Product'
        scenarioList: PropTypes.array.isRequired,
        scenarioType: PropTypes.string.isRequired
    })
};

export default SelectScenarioComponent;
