import heroImage from "../assets/1.jpg";

export default function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-kicker">Ruwindri Private Tutoring</p>
              <h1>Personalised Tutoring for Real Results</h1>
              <p>
                Build confidence, improve grades, and learn at your own pace with
                tailored one-on-one tutoring.
              </p>
              <button>Enquire Now</button>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Tutor helping a student study" />
            </div>
          </div>
        </div>
      </section>
    );
  }
