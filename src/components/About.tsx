import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I lead AI engineering at Amdocs, where I build Generative AI products
          that run in production at enterprise scale. I own each project end to
          end: understanding the need, designing the product, building and
          testing it, and shipping it. In 2026 I shipped 20+ production systems,
          including AI agents, RAG platforms and full-stack apps. One of them
          replaced a third-party service and saves about $200K a year.
        </p>
      </div>
    </div>
  );
};

export default About;
