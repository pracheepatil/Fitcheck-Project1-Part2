import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <section className="contact-info">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>
            Let’s
            <br />
            Connect.
          </h1>

          <p className="contact-description">
            Have a question, suggestion or just want to say hi? We’d love to
            hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon">✉</span>
              <div>
                <strong>Email</strong>
                <p>hello@fitcheck.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">⌕</span>
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">●</span>
              <div>
                <strong>Location</strong>
                <p>Bengaluru, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">♪</span>
              <div>
                <strong>Follow Us</strong>
                <div className="social-links">
                  <a href="#instagram">◎</a>
                  <a href="#twitter">𝕏</a>
                  <a href="#youtube">▶</a>
                  <a href="#linkedin">in</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-card">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" required defaultValue="">
                <option value="" disabled>
                  How can we help?
                </option>
                <option value="general">General question</option>
                <option value="feedback">Feedback</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </form>

          <p className="response-time">
            We usually respond within 24 hours.
          </p>

          <p className="handwritten-text">
            Good
            <br />
            People
            <br />
            Great
            <br />
            Style ♥
          </p>
        </section>
      </div>
    </main>
  );
}

export default Contact;