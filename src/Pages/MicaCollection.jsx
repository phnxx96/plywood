import "./MicaCollection.css";

const mica072 = "/pdfs/mica/mica-072.pdf";
const mica08 = "/pdfs/mica/mica-08.pdf";

const MicaCollection = () => {
  return (
    <section className="mica-page">

      <div className="mica-container">

        <div className="mica-header">

          <span className="mica-tag">
            Premium Collection
          </span>

          <h1>Premium Mica Collection</h1>

          <p>
            Browse our premium decorative mica catalogues.
            View the complete collection online or download the catalogue.
          </p>

        </div>

        {/* 0.72 mm */}

        <div className="mica-section">

          <div className="mica-section-header">

            <div>

              <h2>0.72 mm Decorative Mica</h2>

              <p>
                Premium decorative collection.
              </p>

            </div>

            <div className="mica-buttons">

              <a
                href={mica072}
                target="_blank"
                rel="noreferrer"
                className="mica-btn"
              >
                Open Full Screen
              </a>

              <a
                href={mica072}
                download
                className="mica-btn mica-btn-gold"
              >
                Download PDF
              </a>

            </div>

          </div>

          <iframe
            src={mica072}
            title="0.72 mm Catalogue"
            className="mica-pdf"
          />

        </div>

        {/* 0.8 mm */}

        <div className="mica-section">

          <div className="mica-section-header">

            <div>

              <h2>0.8 mm Decorative Mica</h2>

              <p>
                Premium decorative collection.
              </p>

            </div>

            <div className="mica-buttons">

              <a
                href={mica08}
                target="_blank"
                rel="noreferrer"
                className="mica-btn"
              >
                Open Full Screen
              </a>

              <a
                href={mica08}
                download
                className="mica-btn mica-btn-gold"
              >
                Download PDF
              </a>

            </div>

          </div>

          <iframe
            src={mica08}
            title="0.8 mm Catalogue"
            className="mica-pdf"
          />

        </div>

      </div>

    </section>
  );
};

export default MicaCollection;