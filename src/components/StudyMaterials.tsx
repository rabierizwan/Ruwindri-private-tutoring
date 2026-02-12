
import { bundles } from "./PayButton";

type Subtopic = {
  label: string;
  details?: string[];
  price?: string;
};

type Topic = {
  name: string;
  subtopics: Subtopic[];
  price?: string;
};

type Syllabus = {
  title: string;
  topics: Topic[];
};

export default function StudyMaterials() {
  const syllabi: Syllabus[] = [
    {
      title: "Year 7-10 Mathematics",
      topics: [{
        name: "Papers",
        subtopics:[
          {label: "Paper 1 and Paper 2", price: "$7.99 Each Paper"}
        ]
      }],
      // price: "$7.99 Each Paper",

    },
    {
      title: "Year 11 Mathematics Extension 1 - All $79,99",
      topics: [
        {
          name: "Functions - $19.99 All Subtopics",
          subtopics: [
            { label: "Functions 1", details: ["Limits and Asymptotes", "Inverse Functions"], price: "$6.99" },
            { label: "Functions 2", details: ["Graphs"], price: "$6.99" },
            { label: "Coordinate Geometry", price: "$6.99" },
            { label: "Polynomial Functions", price: "$6.99" },
          ],
          price: "$19.99 Total",
        },
        {
          name: "Trigonometry - $15.99 All Subtopics",
          subtopics: [
            { label: "Trigonometry 1", details: ["Sector + Segment Area", "Angles"], price: "$6.99" },
            { label: "Trigonometry 2", price: "$6.99" },
            { label: "Inverse Trigonometry", price: "$6.99" },
          ],
        },
        {
          name: "Calculus - $19.99 All Subtopics",
          subtopics: [
            { label: "Differential Calculus", price: "$6.99" },
            { label: "Geometrical Applications of Differentiation", price: "$6.99" },
            { label: "Differentiation of Logarithmic + Exponential Functions", price: "$6.99" },
            { label: "Differentiation of Trigonometric Functions", price: "$6.99" },
          ],
        },
        {
          name: "Combinatorics - $11.99 All Subtopics",
          subtopics: [
            { label: "Binomial Expansion", price: "$6.99" },
            { label: "Permutations and Combinations", price: "$6.99" },
          ],
        },
        {
          name: "Prelim Paper - $16.99 All Papers",
          subtopics: [
            { label: "Paper 1", price: "$9.99" },
            { label: "Paper 2", price: "$9.99" },
          ],
        },
      ],
    },
    {
      title: "Year 12 Mathematics Extension 1 - All $74,99 OR 2 Papers for $25.99 ",
      topics: [
        { name: "Proof", subtopics: [{label: "Proofs", price: "$7.99"}] },
        { name: "Vectors", subtopics: [{ label: "Vector Geometry", price: "$7.99" }] },
        {
          name: "Calculus - $28.99 All Subtopics",
          subtopics: [
            { label: "Differential Equations", price: "$7.99" },
            { label: "Integration of Logarithmic + Exponential Functions", price: "$7.99" },
            { label: "Integration of Trigonometric Functions", price: "$7.99" },
            { label: "Physical Applications of Integration", price: "$7.99" },
          ],
        },
        { name: "Trigonometry", subtopics: [{ label: "Trigonometry", price: "$7.99" }] },
        { name: "Stat Analysis", subtopics: [{ label: "Statistical Analysis", price: "$7.99" }] },
        { name: "HSC Paper", subtopics: [{ label: "Paper 1", price: "$13.99" }, { label: "Paper 2", price: "$13.99" }] },
      ], 
    }, 
    {
      title: "Year 12 Mathematics Extension 2 - All $99.99",
      topics: [
        { name: "Topics for Year 12 Ext 2 - All Topics 69.99", subtopics: [
          {label: "Proofs" , price: "$15.99"}, 
          {label: "Vectors" , price: "$15.99"},
          {label: "Complex Numbers" , price: "$15.99"},
          {label: "Calculus" , price: "$15.99"},
          {label: "Mechanics" , price: "$15.99"},
        ]},
        // { name: "Vectors", subtopics: [{label: "Vectors" , price: "15.99"}] },
        // { name: "Complex Numbers", subtopics: [{label: "Complex Numbers" , price: "15.99"}] },
        // { name: "Calculus", subtopics: [{label: "Calculus" , price: "15.99"}] },
        // { name: "Mechanics", subtopics: [{label: "Mechanics" , price: "15.99"}] },
        {
          name: "HSC Paper - $49.99 All Papers",
          subtopics: [{ label: "Paper 1", price: "$18.99" }, { label: "Paper 2", price: "$18.99" }, { label: "Paper 3", price: "$18.99" }],
        },
      ],
    },
    {
      title: "English Year 11-12",
      topics: [
        { name: "Year 11", subtopics: [
          { label: "Prelim Paper 1", price: "Enquire Today" },
          { label: "Prelim Paper 1", price: "Enquire Today" }
        ] },
        { name: "Year 12", subtopics: [
          { label: "Trail Paper 1 A", price: "Enquire Today" },
          { label: "Trail Paper 2 A", price: "Enquire Today" }, 
          { label: "Trail Paper 1 B", price: "Enquire Today" },
          { label: "Trail Paper 2 B", price: "Enquire Today" }

         ] },
      ],
    },
  ];

  const bundlesBySyllabus = bundles.reduce<Record<string, typeof bundles>>((acc, bundle) => {
    if (!acc[bundle.syllabus]) acc[bundle.syllabus] = [];
    acc[bundle.syllabus].push(bundle);
    return acc;
  }, {});

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


        {/* Study Materials  */}
        <div className="study-syllabi">
          <h2>Course Coverage</h2>
          <p className="study-syllabi-lead">
            Topics and subtopics aligned to the mathematics extension sequence.
          </p>
          <div className="syllabus-grid syllabus-grid--table">
            {syllabi.map((syllabus) => (
              <article className="syllabus-card syllabus-card--table" key={syllabus.title}>
                <h3>{syllabus.title}</h3>
                <div className="syllabus-topics">
                  {syllabus.topics.map((topic) => (
                    <div className="syllabus-topic" key={topic.name}>
                      <h4>{topic.name}</h4>
                      {topic.subtopics.length > 0 ? (
                        <>
                          <div className="syllabus-row syllabus-row--head">
                            <span>Subtopic</span>
                            <span>Notes</span>
                            <span>Price</span>
                          </div>
                          <ul>
                          {topic.subtopics.map((subtopic) => (
                            <li key={`${topic.name}-${subtopic.label}`}>
                              <span className="syllabus-cell" data-label="Subtopic">
                                {subtopic.label}
                              </span>
                              <span
                                className={`syllabus-notes syllabus-cell${
                                  subtopic.details && subtopic.details.length > 0
                                    ? ""
                                    : " syllabus-notes--muted"
                                }`}
                                data-label="Notes"
                              >
                                {subtopic.details && subtopic.details.length > 0
                                  ? subtopic.details.join(", ")
                                  : "Covered during lessons"}
                              </span>
                              <span className="syllabus-price syllabus-cell" data-label="Price">
                                {subtopic.price ?? "—"}
                              </span>
                            </li>
                          ))}
                          </ul>
                        </>
                      ) : (
                        <>
                          <div className="syllabus-row syllabus-row--head">
                            <span>Subtopic</span>
                            <span>Notes</span>
                            <span>Price</span>
                          </div>
                          <ul>
                            <li>
                              <span className="syllabus-cell" data-label="Subtopic">
                                Covered in-depth across lessons
                              </span>
                              <span
                                className="syllabus-notes syllabus-cell syllabus-notes--muted"
                                data-label="Notes"
                              >
                                Covered during lessons
                              </span>
                              <span className="syllabus-price syllabus-cell" data-label="Price">
                                —
                              </span>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bundle-store">
          <h2>Bundles</h2>
          <p className="bundle-store-lead">
            Purchase complete topic bundles in one click. You’ll be redirected to Stripe for secure
            checkout.
          </p>
          <div className="bundle-syllabus-grid">
            {Object.entries(bundlesBySyllabus).map(([syllabusTitle, syllabusBundles]) => (
              <section className="bundle-syllabus" key={syllabusTitle}>
                <h3>{syllabusTitle}</h3>
                <div className="bundle-grid">
                  {syllabusBundles.map((bundle) => (
                    <article className="bundle-card" key={bundle.id}>
                      <div className="bundle-card-header">
                        <h4>{bundle.title}</h4>
                        <span className="bundle-price">{bundle.price}</span>
                      </div>
                      <ul className="bundle-includes">
                        {bundle.includes.map((item) => (
                          <li key={`${bundle.id}-${item}`}>{item}</li>
                        ))}
                      </ul>
                      <a
                        className={`bundle-button${bundle.stripeUrl ? "" : " bundle-button--disabled"}`}
                        href={bundle.stripeUrl || undefined}
                        aria-disabled={!bundle.stripeUrl}
                      >
                        {bundle.stripeUrl ? "Buy now" : "Link coming soon"}
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
