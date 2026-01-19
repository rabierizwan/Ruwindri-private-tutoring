export default function StudyMaterials() {
  return (
    <section className="study-materials">
      <div className="container">
        <div className="study-header">
          <p className="study-kicker">Study Materials</p>
          <h1>Resources to support confident learning</h1>
          <p className="study-lead">
            Clear, structured materials designed to reinforce core concepts and help students
            practise with purpose.
          </p>
        </div>
        <div className="study-grid">
          <article className="study-card">
            <h2>Notes</h2>
            <p>Concise topic summaries that explain key ideas with step-by-step examples.</p>
          </article>
          <article className="study-card">
            <h2>Practice Questions</h2>
            <p>Targeted questions to build accuracy, speed, and exam-style confidence.</p>
          </article>
          <article className="study-card">
            <h2>Past Exams</h2>
            <p>Timed practice using past papers to simulate real assessments.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
