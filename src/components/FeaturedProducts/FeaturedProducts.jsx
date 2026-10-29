import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { products } from "../../data/productsData";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
    <section id="products" className="products">
      <div className="products__container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            Featured Products
          </span>

          <h2>
            Premium Products Crafted for Every Interior
          </h2>

          <p>
            Explore our finest range of plywood, veneers, and decorative
            collections trusted by architects, interior designers,
            contractors, and homeowners.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products__grid">

          {products.map((product) => (
            <article className="product-card" key={product.id}>

              {/* Product Image */}
              <div className="product-card__image">
                <img
                  src={product.image}
                  alt={product.title}
                />

                <span className="product-card__badge">
                  {product.badge}
                </span>
              </div>

              {/* Product Content */}
              <div className="product-card__content">

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <NavLink
                  to="/products"
                  className="product-card__button"
                >
                  View Collection
                  <ArrowRight size={18} />
                </NavLink>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;