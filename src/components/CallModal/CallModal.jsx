import "./CallModal.css";
import { X, Phone } from "lucide-react";

const CallModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="call-overlay" onClick={onClose}>
      <div
        className="call-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="call-close" onClick={onClose}>
          <X size={22} />
        </button>

        <h2>Contact Himanshu International</h2>

        <p>Select a number to call</p>

        <a
          href="tel:9847042562"
          className="call-item"
        >
          <Phone size={20} />
          <div>
            <strong>Vinay Goel</strong>
            <span>9847042562</span>
          </div>
        </a>

        <a
          href="tel:9857055313"
          className="call-item"
        >
          <Phone size={20} />
          <div>
            <strong>Sunil Kumar Goel</strong>
            <span>9857055313</span>
          </div>
        </a>

        <a
          href="tel:014525702"
          className="call-item"
        >
          <Phone size={20} />
          <div>
            <strong>Office</strong>
            <span>01-4525702</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CallModal;