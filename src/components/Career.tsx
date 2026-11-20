import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer Team Lead</h4>
                <h5>Amdocs</h5>
              </div>
              <h3>2026-Now</h3>
            </div>
            <p>
              Lead a team of AI engineers and own each project end
              to end. Shipped 20+ production AI agents, RAG
              systems and full-stack platforms in 2026, including
              one that saves about $200K a year.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chief AI Mentor &amp; Advisor</h4>
                <h5>AI Club, Reichman University</h5>
              </div>
              <h3>2026-Now</h3>
            </div>
            <p>
              Mentor students and club leaders on AI projects,
              from first idea to working product, and guide
              hackathon teams building for the club's tech
              industry partners.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Solutions Engineer</h4>
                <h5>Reichman University</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Built LLM agents in Microsoft Copilot Studio that
              handle student inquiries for the Registration
              Department, together with Microsoft. Received a
              Certificate of Appreciation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Amdocs</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Built an AI-powered supplier data dashboard and
              automation system that Amdocs selected for a patent
              filing. Automated ETL and reporting pipelines with
              SQL and Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Content Localization Lead</h4>
                <h5>Aleph Beta × EL AL</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Built AI translation workflows with DeepL, GPT and
              Maestra for large-scale video subtitle localization,
              including quality assurance on the output.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>
                  Technical Support &amp;{" "}
                  <span style={{ whiteSpace: "nowrap" }}>Front-End</span> Developer
                </h4>
                <h5>Weezmo (Nayax)</h5>
              </div>
              <h3>2022-2024</h3>
            </div>
            <p>
              Built client-facing web products in JavaScript, HTML
              and CSS. Troubleshot SaaS production issues through
              log analysis, working closely with R&amp;D.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Project Manager</h4>
                <h5>Hakurnas Lead Works</h5>
              </div>
              <h3>2020-2021</h3>
            </div>
            <p>
              Built a custom digital tracking system that raised
              factory productivity by 25%. Ran the project from
              needs assessment through deployment and team
              onboarding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader &amp; Aircraft Technician</h4>
                <h5>Israeli Air Force</h5>
              </div>
              <h3>2016-2019</h3>
            </div>
            <p>
              Led an 80-soldier unit through complex maintenance
              missions, with final sign-off on technical work.
              Received the Award of Excellence from the Unit
              Commander.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
