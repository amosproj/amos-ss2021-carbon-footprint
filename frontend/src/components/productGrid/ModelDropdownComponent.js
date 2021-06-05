import React, { useContext, useState } from 'react';
import { getModels } from 'interface/simaProInterface';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import { Col, Container, Row } from 'react-grid-system';
import theme from 'resources/theme';
import LoadingComponent from 'components/loading';

/**
 * This component creates the dropdownboxes for the related products
 *
 * It calls the Backend to get the Models for a specific productID
 *
 * @returns the model properties of the related product depending on the model values from getModels func from interface/simaProInterface
 * @author Parham Gandomkar, Martin Wagner, Irem Toroslu, Mani Anand
 */
const ModelDropdownComponent = (props) => {
    const productID = props.productID;
    const productName = props.productName;

    // eslint-disable-next-line
    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);

    // set the initial values for the dropdown list derived from getModels
    const variables = getModels(productID);

    const [selected, setSelected] = useState('Select a model');

    //checking if the variable list is empty
    if (variables === [] || variables === undefined || variables === null) {
        return <LoadingComponent />;
    }

    if (variables.length === 1) {
        return <h3>{variables[0].modelName}</h3>;
    }

    return (
        <Container fluid={true}>
            <Row
                className='w3-dropdown-hover w3-margin-top w3-margin-bottom:2em'
                style={{ backgroundColor: theme.uniformStyle.color.secondaryBackgroundColor }}
            >
                <Col xs={2}>
                    <button
                        className='w3-button'
                        style={{
                            color: theme.uniformStyle.color.secondaryFontColor,
                            backgroundColor: theme.uniformStyle.color.secondaryBackgroundColor,
                            fontSize: theme.typography.buttontitle.fontSize,
                            fontWeight: theme.typography.buttontitle.fontWeight,
                            lineHeight: theme.typography.buttontitle.lineHeight,
                            letterSpacing: theme.typography.buttontitle.letterSpacing
                        }}
                    >
                        {selected}
                    </button>
                    <div
                        className='w3-dropdown-content w3-bar-block w3-border'
                        style={{
                            color: theme.uniformStyle.color.secondaryFontColor,
                            backgroundColor: theme.uniformStyle.color.secondaryBackgroundColor,
                            fontSize: theme.typography.buttontitle.fontSize,
                            fontWeight: theme.typography.buttontitle.fontWeight,
                            lineHeight: theme.typography.buttontitle.lineHeight,
                            letterSpacing: theme.typography.buttonSendtitle.letterSpacing
                        }}
                    >
                        {variables.map((item) => (
                            <button
                                onClick={(props) => {
                                    // Set the Selected Product to the one that has been clicked.
                                    const newSelectedProducts = [
                                        {
                                            productID: productID,
                                            productName: productName,
                                            modelID: item.modelID,
                                            modelName: item.modelName
                                        }
                                    ];
                                    setSelected(item.modelName);
                                    setSelectedProducts(newSelectedProducts);
                                }}
                                className=' w3-bar w3-button'
                                key={item.modelID}
                            >
                                {item.modelName}
                            </button>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ModelDropdownComponent;
