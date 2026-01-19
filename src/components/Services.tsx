export default function Services() {
    return (
      <section className="services" id="services">
        <div className="container services-content">
          <div className="services-intro">
            <h2>Services and Pricing</h2>
            <p>
              Subject support is available across key stages, with personalised lesson plans for
              each student.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Subjects</h3>
              <div className="subject-group">
                <h4>Mathematics</h4>
                <ul>
                  <li>Year 7 – Year 10</li>
                  <li>Standard Year 11 – Year 12</li>
                  <li>Advanced Year 11 – Year 12</li>
                  <li>Extension 1</li>
                  <li>Extension 2</li>
                </ul>
              </div>
              <div className="subject-group">
                <h4>English and Other</h4>
                <ul>
                  <li>English – Year 7 – Year 10</li>
                  <li>Standard English – Year 11 – Year 12</li>
                  <li>Advanced English – Year 11 – Year 12</li>
                  <li>Legal Studies – Year 11 – Year 12</li>
                  <li>General Science – Year 7 – Year 10</li>
                  <li>
                    Medical interviews preparation and guidance from other medical students in
                    Australia (domestic and international)
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-card">
              <h3>Private / 1v1 Tutoring</h3>
              <div className="pricing-list">
                <div className="pricing-row">
                  <span>Online sessions</span>
                  <strong>$50/hour</strong>
                </div>
                <div className="pricing-row">
                  <span>In-person session (tutor’s location)</span>
                  <strong>$65/hour</strong>
                </div>
                <div className="pricing-row">
                  <span>Home tuition</span>
                  <strong>Based on location</strong>
                </div>
              </div>
            </div>
            <div className="service-card">
              <h3>Group Tutoring</h3>
              <p>
                Group tutoring sessions are also available — please get in touch to discuss
                options and pricing based on group size.
              </p>
              <div className="pricing-note">Contact for a tailored group quote.</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
