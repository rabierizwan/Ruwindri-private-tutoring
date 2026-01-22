import reviewsBackground from "../assets/reviews-background.jpg";

export default function Reviews() {
  return (
    <section
      className="reviews"
      aria-labelledby="reviews-title"
      style={{ ["--reviews-bg" as string]: `url(${reviewsBackground})` }}
    >
      <div className="container">
        <h2 id="reviews-title">Reviews</h2>
        <div className="reviews-track" aria-label="Client reviews">
          <article className="review-card">
            <p>
              &quot;I’m genuinely so grateful for Ruwindri as my math tutor. She has helped me
              significantly improve my results by teaching me better strategies, fixing gaps in
              my understanding, and making complex topics easy to follow in extension 1. Her
              lessons are structured, efficient, and tailored to exactly what I need. Since
              learning with her, my confidence has increased and my performance in math has
              improved noticeably. Highly recommend to anyone who wants real improvement.&quot;
            </p>
            <p className="review-author">- Sam</p>
            <p className="review-stars">*****</p>
          </article>
          <article className="review-card">
            <p>
              &quot;Ruwindri is an exceptional tutor &amp; has been great with my daughter currently
              in year 7. Ruwindri is professional and understands the student&#39;s strengths &amp;
              weaknesses. I have no hesitation in recommending Ruwindri to anyone who needs
              tutoring assistance.&quot;
            </p>
            <p className="review-author">- Sanlakshi</p>
            <p className="review-stars">*****</p>
          </article>

          <article className="review-card">
            <p>
              &quot;Thanks to Ruwindri’s guidance, my child’s results in maths jumped from an average 
              of 65% to 90%. The lessons were clear, encouraging and truly tailored to their needs.&quot;
            </p>
            <p className="review-author">- Maya</p>
            <p className="review-stars">*****</p>
          </article>

          <article className="review-card">
            <p>
              &quot;“Ruwindri has been an incredible tutor, and was integral during my HSC year.
               Her lessons allowed me to go from being an average student, to the top of my class. Thank you!” &quot;
            </p>
            <p className="review-author">- James</p>
            <p className="review-stars">*****</p>
          </article>

        </div>
      </div>
    </section>
  );
}
