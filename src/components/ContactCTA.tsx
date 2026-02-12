export default function ContactCTA() {
    return (
      <section className="contact-cta" id="contact">
        <div className="container contact-cta-content">
          <div className="contact-cta-text">
            <h2>Let’s Get Started</h2>
            <p>
              If you’re looking for a tutor who can help you improve results, build confidence,
              and make learning feel more manageable — you’re in the right place.
            </p>
            <p>
              Whether you’re aiming to catch up, stay consistent, or push for top marks, each
              lesson is tailored to your goals and learning style across Mathematics (including
              Extension 1 &amp; 2), English, Legal Studies, and General Science.
            </p>
            <h3>Enquire Today</h3>
            <p>
              Use the form to send an enquiry and I’ll get back to you as soon as possible. To
              help me respond quickly, please include:
            </p>
            <ul>
              <li>Student’s year level</li>
              <li>Subject(s)</li>
              <li>Current school/level (if relevant)</li>
              <li>What you’d like support with</li>
              <li>Preferred tutoring format (online or in-person)</li>
              <li>Availability (days/times)</li>
            </ul>
          </div>
          <form
            className="contact-cta-form"
            action="https://formspree.io/f/xykdezgn"
            method="POST"
          >
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone (optional)
              <input type="tel" name="phone" />
            </label>
            <label>
              Year Level
              <input type="text" name="yearLevel" required />
            </label>
            <label>
              Subjects
              <input type="text" name="subjects" required />
            </label>
            <label>
              Preferred Format
              <select name="format">
                <option value="online">Online</option>
                <option value="in-person">In-person</option>
                <option value="either">Either</option>
              </select>
            </label>
            <label>
              Availability
              <input type="text" name="availability" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </section>
    );
  }
