
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Data, categories } from "../data/Data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(Data);

  useEffect(() => {
    let result = Data.filter((product) => {
      const matchesCategory = !category || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);

    setVisibleProducts(result);
  }, [category, search, sort]);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (value) setSearchParams({ category: value });
    else setSearchParams({});
  };

  return (
    <main className="container section-space">
      <div className="section-heading text-center mb-4">
        <span className="eyebrow">THE TECHZONE COLLECTION</span>
        <h1>All products</h1>
        <p>Explore our range of technology and accessories.</p>
      </div>

      <div className="filter-panel row g-3 align-items-end mb-4">
        <div className="col-12 col-md-5">
          <label htmlFor="productSearch" className="form-label">Search products</label>
          <input id="productSearch" className="form-control" type="search"
            placeholder="Search by product name..." value={search}
            onChange={(event) => setSearch(event.target.value)} />
        </div>
        <div className="col-6 col-md-4">
          <label htmlFor="categoryFilter" className="form-label">Category</label>
          <select id="categoryFilter" className="form-select" value={category} onChange={handleCategoryChange}>
            <option value="">All categories</option>
            {categories.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="sortProducts" className="form-label">Sort by price</label>
          <select id="sortProducts" className="form-select" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="">Recommended</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="results-count">{visibleProducts.length} products found</span>
        {(category || search || sort) && (
          <button className="btn btn-sm btn-link text-dark" onClick={() => {
            setSearch(""); setSort(""); setSearchParams({});
          }}>Clear filters</button>
        )}
      </div>

      {visibleProducts.length ? (
        <div className="row g-4">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">⌕</div>
          <h3>No products found</h3>
          <p>Try another search term or choose a different category.</p>
          <button className="btn btn-dark" onClick={() => { setSearch(""); setSort(""); setSearchParams({}); }}>
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
};

export default Products;
