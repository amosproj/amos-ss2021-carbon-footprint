import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGridComponent from 'components/productGrid';

/**
 * This component differenciates between the three different possible subcategories.
 * type will be either 'products', 'solutions' or 'services'.
 *
 * @returns Three different lines of text, depending on the `:type` parameter used in routes/PrivateRoutes.js
 * @author Martin Wagner
 */
export default function ProductSolutionsServicesComponent() {
    const { type } = useParams();

    return <ProductGridComponent selectedCategory={type} />;
}
