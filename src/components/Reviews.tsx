import { useEffect, useMemo, useState } from "react";
import reviewsBackground from "../assets/reviews-background.jpg";

export default function Reviews() {
  const reviews = useMemo(
    () => [
      {
        text:
          "I’m genuinely so grateful for Ruwindri as my math tutor. She has helped me significantly " +
          "improve my results by teaching me better strategies, fixing gaps in my understanding, and " +
          "making complex topics easy to follow in extension 1. Her lessons are structured, efficient, " +
          "and tailored to exactly what I need. Since learning with her, my confidence has increased " +
          "and my performance in math has improved noticeably. Highly recommend to anyone who wants " +
          "real improvement.",
        author: "Sam",
      },
      {
        text:
          "Ruwindri is an exceptional tutor and has been great with my daughter currently in year 7. " +
          "Ruwindri is professional and understands the student's strengths and weaknesses. I have no " +
          "hesitation in recommending Ruwindri to anyone who needs tutoring assistance.",
        author: "Sanlakshi",
      },
      {
        text:
          "Thanks to Ruwindri’s guidance, my child’s results in maths jumped from an average of 65% " +
          "to 90%. The lessons were clear, encouraging and truly tailored to their needs.",
        author: "Maya",
      },
      {
        text:
          "Ruwindri has been an incredible tutor, and was integral during my HSC year. Her lessons " +
          "allowed me to go from being an average student, to the top of my class. Thank you!",
        author: "James",
      }, 
      {
        text: 
         "Ruwindri’s tutoring was extremely helpful when I was struggling to understand what was going on in maths." +
           "She broke everything down to the basics and helped me improve my grades.",
         author: "Jae",
      },
      {
        text: 
        "My child’s grades improved significantly under Ruwindri’s guidance, " +
          "thanks to her structured lessons that directly addressed my child’s issues and concerns.",

          author: "Carrie",  
      },
        ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [paused, reviews.length]);

  const goPrev = () => {
    setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section
      className="reviews"
      aria-labelledby="reviews-title"
      style={{ ["--reviews-bg" as string]: `url(${reviewsBackground})` }}
    >
      <div className="container">
        <h2 id="reviews-title">Reviews</h2>
        <div className="reviews-carousel" aria-label="Client reviews">
          <button
            className="reviews-arrow reviews-arrow-prev"
            type="button"
            aria-label="Previous review"
            onClick={goPrev}
          >
            ←
          </button>
          <button
            className="reviews-arrow reviews-arrow-next"
            type="button"
            aria-label="Next review"
            onClick={goNext}
          >
            →
          </button>
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {reviews.map((review) => (
              <article className="review-card" key={review.author}>
                <p>&quot;{review.text}&quot;</p>
                <p className="review-author">- {review.author}</p>
                <p className="review-stars">*****</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
