import React from "react";

const FilterCard = (props) => {
  return (
    <>
      <div className="filter-section">
        <div className="category-filter-card">
          <div className="filter-heading">
            <h6>Browse Categories</h6>
          </div>
          <ul>
            
            {!props.loadingCategory &&
              props.categoryData?.categories?.map((i) => (
                <li className=" text-capitalize " key={i}>
                  <input
                    type="radio"
                    name="category"
                    id={i}
                    value={encodeURIComponent(i)}
                    onChange={(e) => props.setOption(e.target.value)}
                    checked={decodeURIComponent(props.option) === i}
                  />
                  {i}
                </li>
              ))}
          </ul>
        </div>
        <div className="product-filter-card mt-4">
          <div className="filter-heading">
            <h6>Product Filters</h6>
          </div>

          <div className="ms-4 mt-3">
            <h6>Price</h6>
            <div className="range-container">
              <span>Max Price: {props.maxPrice || ""}</span>
              <input
                type="range"
                min={100}
                max={1000000}
                value={props.maxPrice}
                step="1"
                id="range-left"
                name="min"
                onChange={(e) => props.setMaxPrice(e.target.value)}
              />
              <div className="d-flex justify-content-between mt-1 pe-2">
                <span>{100}</span>
                <span>{100000}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
