import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}

      <section className="footer-cta">

        <div className="footer-cta__content">

          <h2>
            Ready to Transform Your Interior?
          </h2>

          <p>
            Discover premium plywood, veneers, laminates and
            decorative materials designed for beautiful,
            durable and timeless interiors.
          </p>

          <div className="footer-cta__buttons">

            <Link to="/products" className="footer-btn">
              View Products
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/catalogue"
              className="footer-btn footer-btn--outline"
            >
              Browse Catalogue
            </Link>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <div className="footer-container">

          {/* Company */}

          <div className="footer-column">

            <h3>
              Himanshu International
            </h3>

            <p>
              Himanshu International is committed to providing
              premium-quality plywood, veneers, laminates,
              MDF boards and decorative interior materials.
              With a focus on durability, craftsmanship and
              customer satisfaction, we strive to deliver
              reliable products trusted by homeowners,
              architects and interior professionals.
            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h4>Quick Links</h4>

            <Link to="/">Home</Link>

            <Link to="/about">About us</Link>

            <Link to="/products">Products</Link>

            <Link to="/catalogue">Catalogue</Link>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h4>Contact</h4>

            <a href="tel:014525702">
              <Phone size={18} />
              01-4525702
            </a>

            <a href="tel:+9779857055313">
              <Phone size={18} />
              +977-9857055313
            </a>

            <a href="tel:+9779847042562">
              <Phone size={18} />
              +977-9847042562
            </a>

            <a href="mailto:Himanshuinternationalply@gmail.com">
              <Mail size={18} />
              Email Us
            </a>

            <a
              href="https://maps.app.goo.gl/bhiNUmqwrQNwkby48?g_st=ac"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} />
              Our Location
            </a>

           <a
  href="https://www.instagram.com/himanshuinternationalplywood/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Globe size={18} />
  Instagram
</a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Himanshu International. All Rights Reserved.
          </p>

          <span>
            Designed & Developed by Ram Pandey
          </span>

        </div>

      </footer>
    </>
  );
};

export default Footer;