import "./About.css";
import showroom from "../assets/about/showroom.jpeg";
import vinay from "../assets/about/vinay-goel.jpeg";
import sunil from "../assets/about/sunil-kumar-goel.jpeg";
import rajesh from "../assets/about/rajesh-nemani.jpeg";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO */}

      <div className="about-hero">

        <span className="about-tag">
          About Us
        </span>

        <h1>
          Building Trust Through
          <span> Premium Interior Solutions</span>
        </h1>

        <p>
          Himanshu International Plywood is committed to providing premium
          plywood, veneers, laminates, MDF, Newwood and interior products
          with exceptional quality, reliability and customer service.
        </p>

      </div>

      {/* COMPANY STORY */}
<section className="company-story">

  <div className="company-story__image">
    <img
      src={showroom}
      alt="Himanshu International Showroom"
    />
  </div>

  <div className="company-story__text">

    <span className="story-tag">
      Our Story
    </span>

    <h2>
      Building Trust Through Quality & Excellence
    </h2>

    <p>
      Himanshu International Plywood has become a trusted destination for
      premium plywood, veneers, laminates, MDF boards, Newwood and interior
      products. Every product we offer is selected with quality,
      durability and customer satisfaction in mind.
    </p>

    <p>
      Over the years we have earned the trust of homeowners, architects,
      contractors and interior designers by delivering premium products,
      honest service and reliable support for every project.
    </p>

  </div>

</section>

      {/* LEADERSHIP */}

      <section className="leadership">

        <div className="section-title">

          <h2>Meet Our Leadership</h2>

          <p>
            Experienced leadership committed to quality,
            innovation and customer satisfaction.
          </p>

        </div>

        <div className="leaders-grid">

          <div className="leader-card">

            <img src={vinay} alt="Vinay Goel" />

            <h3>Vinay Goel</h3>

            <span>Managing Director</span>

            <p>
              Leading the company with a vision for innovation,
              customer satisfaction and premium interior solutions.
            </p>

          </div>

          <div className="leader-card">

            <img src={sunil} alt="Sunil Kumar Goel" />

            <h3>Sunil Kumar Goel</h3>

            <span>Founder</span>

            <p>
              Founder of Himanshu International Plywood,
              dedicated to quality products and trusted customer relationships.
            </p>

          </div>

          <div className="leader-card">

            <img src={rajesh} alt="Rajesh Nemani" />

            <h3>Rajesh Nemani</h3>

            <span>Partner & Investor</span>

            <p>
              Supporting the company's growth through strategic
              planning, investment and long-term business development.
            </p>

          </div>

        </div>

      </section>

      {/* VISION */}

      <section className="vision-section">

        <h2>Our Vision</h2>

        <p>
          To become one of the most trusted suppliers of premium interior
          materials by consistently delivering superior quality,
          innovative products, and outstanding customer service while
          building lasting relationships with every client.
        </p>

      </section>

     {/* STATISTICS */}

<section className="stats-section">

  <div className="stats-card">
    <h2>20+</h2>
    <p>Years of Experience</p>
  </div>

  <div className="stats-card">
    <h2>1000+</h2>
    <p>Premium Products</p>
  </div>

  <div className="stats-card">
    <h2>Trusted</h2>
    <p>Quality Brands</p>
  </div>

  <div className="stats-card">
    <h2>Customer</h2>
    <p>First Service</p>
  </div>

</section>

      {/* WHY CHOOSE US */}

      <section className="why-us">

        <h2>Why Choose Us</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Premium Quality</h3>
            <p>
              Carefully selected products from trusted brands that meet
              the highest quality standards.
            </p>
          </div>

          <div className="why-card">
            <h3>Trusted Service</h3>
            <p>
              We focus on honest guidance, reliable support,
              and complete customer satisfaction.
            </p>
          </div>

          <div className="why-card">
            <h3>Wide Product Range</h3>
            <p>
              From plywood and veneers to laminates, MDF,
              and Newwood, everything under one roof.
            </p>
          </div>

          <div className="why-card">
            <h3>Customer First</h3>
            <p>
              Every customer receives personalized attention
              and solutions that fit their needs.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Ready to Build Your Dream Interior?</h2>

        <p>
          Explore our premium collection of plywood,
          veneers, laminates, and interior solutions.
        </p>

        <a href="/products" className="about-btn">
          Explore Products
        </a>

      </section>

    </section>
  );
};

export default About;