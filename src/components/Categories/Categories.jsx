import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categoriesData";
import "./Categories.css";

const Categories = () => {
  return (
    <section id="categories" className="categories">
      <div className="categories__container">
        <div className="section-header">
          <span className="section-tag">
            Our Categories
          </span>

          <h2>
            Explore Our Premium Collection
          </h2>

          <p>
            Discover high-quality plywood, laminates, veneers and boards
            designed for beautiful interiors and long-lasting durability.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category.id}
            >
              <div className="category-card__image">
                <img
                  src={category.image}
                  alt={category.title}
                />
              </div>

              <div className="category-card__overlay">
                <div className="category-card__content">
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                <Link
  to={`/products#${category.id}`}
  className="collection-btn"
>
  <div className="collection-btn__text">
    <small>Premium Collection</small>
    <span>Explore Products</span>
  </div>

  <ArrowRight size={20} />
</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;