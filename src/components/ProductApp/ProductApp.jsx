import fetchProducts from '../../services/product-api';
import { useState, useEffect } from 'react';

import { ProductList } from '../ProductList/ProductList';
import { Modal } from '../Modal/Modal';

function ProductApp() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
        })
    
      
    }, [])
    const toggle = () => {
        setOpen(prev => !prev)
    }
    const getValue = (value) => {
        setProduct(value);
        toggle()
    }
    return (
        <>
            <ProductList onClick={getValue} items={products} />
            {open ? <Modal onClose={toggle} product={product} /> : null}
           
        </>
       
    )
    
}
export default ProductApp;