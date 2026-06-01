import "bootstrap/dist/css/bootstrap.min.css";
import carImage from "./image.png";

export default function App() {
  const cards = [{ bg: "#3b82f6" }, { bg: "#facc15" }, { bg: "#ef4444" }];

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">Cards Columns</h2>
      <div className="row g-3">
        {cards.map((card, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div
              className="card rounded-1"
              style={{ backgroundColor: card.bg, borderColor: card.bg }}
            >
              <div className="card-body p-2">
                <div className="bg-white p-3 mb-2 d-flex justify-content-center">
                  <img src={carImage} className="img-fluid" alt="Car" />
                </div>
                <p className="text-center text-dark m-0 pb-1">
                  Some text inside the first card
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
