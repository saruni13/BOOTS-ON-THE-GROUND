import React from 'react';

function FilterModule({ filterItems, items }) {
  const categoryButtons = [
    { name: 'All Products', value: 'All' },
    { name: 'Kitchen', value: 'kitchen' },
    { name: 'Clothing', value: 'clothing' },
    { name: 'Food', value: 'food' },
    { name: 'Electronics', value: 'electronics' },
  ];

  const handleClick = (value) => {
    filterItems(value);
  };

  return (
    <div className="filter-buttons">
      {categoryButtons.map((button) => (
        <button id="category" key={button.value} type="button" onClick={() => handleClick(button.value)}>
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default FilterModule;