import "./About.css";
import styleWomen from "../assets/model-1.png";
import styleman from  "../assets/style-man.png"

function About() {
  return (
    <main className="about-page">
      <div className="container about-container">
        {/* Hero Section */}
        <section className="row align-items-center about-hero">
          <div className="col-lg-5">
            <p className="eyebrow">ABOUT US</p>

            <h1 className="about-title">
              Style for
              <br />
              Everyone.
            </h1>

            <p className="about-text">
              Style is personal. FitCheck is a space to notice what feels like
              you, try something new, and build confidence in the clothes you
              already love.
            </p>

            <p className="about-text">
              From everyday outfits to your next favorite aesthetic, a little
              reflection can make getting dressed feel easier.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="style-collage">
              <img
                src={styleman}
                alt="Man wearing a stylish outfit"
                className="man-image"
              />

              <img
                src={styleWomen}
                alt="Woman wearing a stylish outfit"
                className="woman-image"
              />

              <p className="collage-caption">
                Different styles.
                <br />
                Same confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Information Cards */}
        <section className="row g-3 about-cards">
          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <div className="card-icon">♧</div>

              <h2>Our Mission</h2>

              <p>
                Make personal styling feel approachable, creative, and part of
                everyday life.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <div className="card-icon">✧</div>

              <h2>Our Vision</h2>

              <p>
                A space where everyone can explore their taste and feel
                confident in what they wear.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="about-card">
              <div className="card-icon">♡</div>

              <h2>Our Approach</h2>

              <p>
                Start with your own outfits. Notice the details. Try small
                changes that feel right for you.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Feature Strip */}
        <section className="feature-strip row text-center">
          <div className="col-md-4">
            <h3>Aesthetic Analyzer</h3>
            <p>Outfit details &amp; style patterns</p>
          </div>

          <div className="col-md-4">
            <h3>Style Mentor</h3>
            <p>Weekly ideas &amp; inspiration</p>
          </div>

          <div className="col-md-4">
            <h3>You, always.</h3>
            <p>Your taste comes first</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;