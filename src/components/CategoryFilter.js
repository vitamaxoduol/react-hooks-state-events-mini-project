
import React, {useState} from "react";




function CategoryFilter({categories, onChangeCategory}) {

  const [selectedCategory, setselectedCategory] = useState('All')

  function handleCategoryChange() {
    setselectedCategory(categories);
    setselectedCategory(onChangeCategory)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button key={category} 
        className={category === selectedCategory ? "selected" : ""} 
        onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ) )
      
      }
    </div>
  );
  // return(
  //   <div className="categories">
  //     <h5>Category filters</h5>
  //     {categories.map((category) => (
  //       <button key={category}>{category}</button>
  //     ))}
  //     </div>
  // )
}
export default CategoryFilter;
