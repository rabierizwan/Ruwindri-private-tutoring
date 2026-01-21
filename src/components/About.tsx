import tutorPortrait from "../assets/Images/img5.jpeg";
import aboutImageOne from "../assets/Images/img1.jpeg";
import aboutImageTwo from "../assets/Images/img2.jpeg";
import aboutImageThree from "../assets/Images/img3.jpeg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-content">
        <div className="about-grid">
          <div className="about-media">
            <div className="about-photo">
              <img src={tutorPortrait} alt="Ruwindri, private tutor" />
            </div>
            <div className="about-gallery">
              <img src={aboutImageOne} alt="Student learning support session" />
            </div>
          </div>
          <div className="about-card">
            <h3>Qualifications and Achievements</h3>
            <ul>
              <li>ATAR of 98.55</li>
              <li>Band 6 results in:</li>
              <div  style={{ marginLeft: "20px", marginBottom: "10px", listStyleType: "disc" }}>
              <li>Legal Studies</li>
              <li>English Advanced</li>
              <li>Mathematics Extension 1</li>
              <li>Mathematics Extension 2</li>
              </div>

              <li>
                Currently studying a Bachelor of Clinical Sciences (Medicine) / Doctor of
                Medicine (MD) at Western Sydney University
              </li>
              <li>UCAT: 3040</li>
              <li>ADF Long Tan Youth Leadership and Teamwork Award</li>
              <li>ADF Future Innovators in STEM Award</li>
              <li>Extensive experience as a tutor </li>
              <li>⁠⁠Experience working with students across a wide range of subjects and year levels </li>
              <li>⁠ ⁠Proven to improve understanding of content, confidence and school results</li>

            </ul>
          </div>
          <div className="about-gallery">
            <img src={aboutImageTwo} alt="Focused tutoring study moment" />
            <img src={aboutImageThree} alt="Focused tutoring study moment 2" />
          </div>
          <div className="about-texts">
            <div className="about-copy">
              <h2>About Me</h2>
              <p>
                I am a dedicated and friendly tutor who genuinely enjoys helping students grow in
                confidence and reach their academic potential. I graduated from Our Lady of Mercy
                College, Parramatta in 2024 with an ATAR of 98.55, and I am currently studying
                Medicine at Western Sydney University.
              </p>
              <p>
                As someone who has navigated the demands of high school and competitive
                examinations, I understand how challenging and overwhelming study can feel at
                times. I aim to create a supportive and encouraging learning environment where
                students feel comfortable asking questions, making mistakes, and building
                understanding at their own pace. I am patient, organised, and highly motivated,
                and I take pride in forming positive relationships with my students, so they feel
                supported both academically and personally throughout their learning journey.
              </p>
            </div>
            <div className="experience-copy">
              <h2>Experience</h2>
              <p>
                I have over three years of tutoring experience, supporting students across a wide
                range of academic levels, abilities, and goals. I have spent two years tutoring
                high school students in both one-on-one and small group settings, with a strong
                focus on addressing gaps in understanding, strengthening foundational skills, and
                helping students build confidence in their learning.
              </p>
              <p>
                In addition to high school tutoring, I also tutor students at medical school
                level, providing academic support in a demanding and high-pressure learning
                environment. This experience has further strengthened my ability to explain
                complex concepts clearly, adapt to different learning styles, and support students
                with effective study strategies and time management.
              </p>
              <p>
                I have worked with students through several private tutoring companies, and many
                of my current and past students have demonstrated significant improvements in
                grades, academic confidence, and overall performance. Parents and students
                consistently report clearer understanding, stronger exam technique, and improved
                results over time. Student and parent reviews are available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
