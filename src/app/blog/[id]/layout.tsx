
import React from 'react';

interface ProductsLayoutProps {
        children?: React.ReactNode;
}

export const metadata = {
    title:  'Products'
};
const ProductsLayout: React.FC<ProductsLayoutProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ProductsLayout;
