import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { heroSlides } from "../../assets/hero/heroData";
import CallModal from "../CallModal/CallModal";
import "./Hero.css";

const features = [
  "Premium Quality",
  "Fast Delivery",
  "Trusted Products",
];

const Hero = () => {
  const [callOpen, setCallOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero__background ${
            index === currentSlide ? "hero__background--active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="hero__overlay"></div>

      {/* Hero Content */}
      <div className="hero__content">

        {/* Badge */}
        <span className="hero__badge">
          Premium Plywood • Mica • Veneers
        </span>

        {/* Dynamic Heading */}
        <h1 className="hero__title">
          {heroSlides[currentSlide].title}
        </h1>

        {/* Dynamic Subtitle */}
        <p className="hero__subtitle">
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Buttons */}
       <div className="hero__buttons">
  <Link to="/products" className="btn btn-primary">
    Explore Products
    <ArrowRight size={18} />
  </Link>

  <button
  className="btn btn-secondary"
  onClick={() => setCallOpen(true)}
>
  <Phone size={18} />
  Call Now
</button>
</div>
        {/* Trust Features */}
        <div className="hero__features">
          {features.map((feature) => (
            <div key={feature} className="feature">
              ✓ {feature}
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <span></span>
      </div>
<CallModal
  open={callOpen}
  onClose={() => setCallOpen(false)}
/>

    </section>
  );
};

export default Hero;