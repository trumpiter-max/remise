import { useState, useEffect } from 'react';

function FilteredProduct() {
    const [allProducts, setAllProducts] = useState([]); 
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://127.0.0.1:8000/api/v1/management/products/')
            .then(response => response.json())
            .then(data => {
                setAllProducts(data);
                setVisibleProducts(data.slice(0, itemsPerPage));
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    const loadMore = () => {
        const newPage = page + 1;
        const nextItems = allProducts.slice(page * itemsPerPage, newPage * itemsPerPage);
        setVisibleProducts(prevItems => [...prevItems, ...nextItems]);
        setPage(newPage);
    };
    
    const handleSearch = () => {
        const results = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setVisibleProducts(results);
    }
}