import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "../data/productCategories";
import heroBanner from "../assets/hero/hero-6.png";
import "./Products.css";

const Products = () => {
  return (
    <section className="products-page">
   <div
  className="products-hero"
  style={{
    backgroundImage: `url(${heroBanner})`,
  }}
>
  <div className="products-hero__overlay"></div>

  <div className="products-hero__content">

    <div className="products-hero__breadcrumb">
      Home <span>/</span> Products
    </div>

    <h1 className="products-title">
     OUR <span>COLLECTION</span>
    </h1>

    <div className="products-divider">
  <span></span>
  <Leaf size={22} />
  <span></span>
</div>

    <h2>
      Premium Interior Material Collection
    </h2>

    <p>
      We offer a wide range of premium quality plywood, veneers,
      boards, laminates and decorative materials for every
      interior and architectural need.
    </p>

  </div>
</div> 

      <div className="products-page__container">

        

        {/* Product Categories */}

        <div className="products-grid">

          {productCategories.map((category) => (

  <div
    id={category.id}
    className="product-category-card"
    key={category.id}
  >

              <div className="product-card__image">
  <img src={category.image} alt={category.title} />
</div>

<div className="product-category-card__top">

  <h2>{category.title}</h2>

  <p>{category.description}</p>

</div>

              <ul className="product-list">

                {category.items.map((item, index) => (

                 <li key={index}>
  <span className="list-icon">
    ✦
  </span>
  {item}
</li>


                ))}

              </ul>

              <Link
  to={category.link}
  className="catalogue-btn"
>
  {category.link === "/products/mica"
    ? "View Collection"
    : "View Catalogue"}

  <ArrowRight size={18} />
</Link>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="products-cta">

          <h2>
            Looking for Complete Product Specifications?
          </h2>

          <p>
            Browse our latest catalogue for complete product
            information, available sizes, finishes and collections.
          </p>

          <Link
            to="/catalogue"
            className="catalogue-btn catalogue-btn--large"
          >
            Open Catalogue
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Products;