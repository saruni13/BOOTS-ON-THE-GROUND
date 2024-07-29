import React,  {useState} from 'react'
import ProductCard from './ProductCard'
import FilterModule from './FilterModule';
import SearchBar from './SearchBar';



const ProductCollection = ({ items, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filterItems = (catItem) => {
    setSelectedCategory(catItem);
    if (catItem === 'All') {
      // setItems(items); // Reset to all items if "All Products" is clicked
    } else {
      const filteredItems = items.filter((item) => item.category === catItem);
      console.log('Filtered Items:', filteredItems); // Log filtered items for debugging
      if (filteredItems.length > 0) {
        setItems(filteredItems);
        console.log('Updated Items:', items); // Log updated items for debugging
      }
    }
  };

  const filteredItems = items.filter((item) => {
    // Combine category and search term filtering conditions
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  return (
    <>
    <div>
      <SearchBar onSearchChange={handleSearchChange}/>
      <FilterModule filterItems={filterItems}/>
    </div>
    <div className='product-collection'>
      {filteredItems.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          addToCart={addToCart} 
        />
        
      ))}
    </div>
    </>
  )}

export default ProductCollection