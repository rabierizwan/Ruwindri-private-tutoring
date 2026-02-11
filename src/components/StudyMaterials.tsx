


export default function StudyMaterials() {
  const syllabi = [
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
            { label: "Trigonometry 1", details: ["Sector + Segment Area", "Angles"], },
            { label: "Trigonometry 2" },
            { label: "Inverse Trigonometry" },
          ],
          price: [],
        },
        {
          name: "Calculus - $19.99 All Subtopics",
          subtopics: [
            { label: "Differential Calculus" },
            { label: "Geometrical Applications of Differentiation" },
            { label: "Differentiation of Logarithmic + Exponential Functions" },
            { label: "Differentiation of Trigonometric Functions" },
          ],
          price: [],
        },
        {
          name: "Combinatorics - $11.99 All Subtopics",
          subtopics: [
            { label: "Binomial Expansion" },
            { label: "Permutations and Combinations", },
          ],
        },
        { 
          name: "Prelim Paper - $16.99 All Papers", 
          subtopics: [
            { label: "Paper 1", price: "$9.99" }, 
            { label: "Paper 2", price: "$9.99" }],
          price: [],
        
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
                              <span>{subtopic.label}</span>
                              <span className="syllabus-notes">
                                {subtopic.details && subtopic.details.length > 0
                                  ? subtopic.details.join(", ")
                                  : "—"}
                              </span>
                              <span className="syllabus-price">{subtopic.price ?? "—"}</span>
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
                              <span>Covered in-depth across lessons</span>
                              <span className="syllabus-notes">—</span>
                              <span className="syllabus-price">—</span>
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
      </div>
    </section>
  );
}
