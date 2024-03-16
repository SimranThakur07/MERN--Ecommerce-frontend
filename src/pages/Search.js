import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Supscription from "../components/Supscription";
import "../styles/Category.css";
import FilterCard from "../components/cards/FilterCard";
import TopProjectCard from "../components/cards/TopProjectCard";
import { Link } from "react-router-dom";
import "../styles/Category.css";
import ProductCard from "../components/cards/ProductCard";
import Loader from "../components/cards/Loader";
import toast from "react-hot-toast";
import { addToCart } from "../redux/reducer/cartReducer";
import { useAllCategoryQuery, useSearchAllProductQuery } from "../redux/api/productApi";
import { useDispatch } from "react-redux";
const Search = () => {
  const {
    data: categoryData,
    isLoading: loadingCategory,
    isError,
    error,
  } = useAllCategoryQuery();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  const { isLoading: productLoading, data: searchData, isError: isProductError, error: productError } =
    useSearchAllProductQuery({
      search,
      sort,
      category,
      page,
      price: maxPrice,
    });
  console.log(searchData);

  if (isError) {
    const err = error;
    toast.error = err.data.message;
  }
  if (isProductError) {
    const err = productError;
    toast.error = err.data.message;
  }

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  const addToCartHandler = (cartItem) => {
    if(cartItem.stock < 1) return toast.error("Out of Stock")
    dispatch(addToCart(cartItem))
  toast.success("Added to Cart")
  }

  return (
    <>
      <Navbar />
      <main className="category-section p-4 px-5">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-3 filter-section">
          <FilterCard
              sort={sort}
              setSort={setSort}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              category={category}
              setCategory={setCategory}
              loadingCategory={loadingCategory}
              categoryData={categoryData}
            />
          </div>
          <div className="col-9 product-section">
            <div className="product-view-filter">
              <div className="select-filter">
                <select name="" id="">
                  <option value="">Sort</option>
                  <option value="asc">Low to High (Price)</option>
                  <option value="dsc">High to Low (Price)</option>
                </select>
              </div>
              <div className="product-view-search">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 mt-5 text-center ">
              {
                 productLoading ? <Loader/> : searchData?.products?.map((i) => (
                  <ProductCard
                  productId={i?._id}
                  photo={i?.photo}
                  name={i?.name}
                  category={i?.category}
                  price={i?.price}
                  stock={i?.stock}
                  handler={addToCartHandler}
                  />
                ))
              }
 
            </div>
          </div>
         {
            searchData && searchData?.totalPage > 1 && (
           <article className="text-center">
            <button
              disabled={!isPrevPage}
              className="btn btn-primary "
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span className="mx-2">
              {page} of {searchData?.totalPage}
            </span>
            <button
              disabled={!isNextPage}
              className="btn btn-primary "
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
          )
         }
        </div>

        <TopProjectCard />
      </main>
      <Supscription />
      <Footer />
    </>
  );
};

export default Search;
