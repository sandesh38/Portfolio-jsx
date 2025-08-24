import "./Hero.css";
// If you have a local image, uncomment the next line and place hero.jpg in src/assets
// import heroImg from "../assets/hero.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-content">
          <p className="eyebrow">Build with React</p>
          <h1 className="hero-title">
            Craft modern UIs<br />
            with reusable <span className="highlight">components</span>
          </h1>
          <p className="hero-subtitle">
            Learn by building. Start with a header, add a hero, then grow into
            real projects. React makes UI development simple and scalable.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#get-started">Get Started</a>
            <a className="btn btn-ghost" href="#learn-more">Learn More</a>
          </div>
          <ul className="hero-points">
            <li>✅ Component-based architecture</li>
            <li>✅ Fast development with Vite</li>
            <li>✅ Beginner-friendly examples</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="hero-media" aria-hidden="true">
          {/* Use local image if imported above: <img src={heroImg} alt="" /> */}
          {/* Or use a placeholder image from the web: */}
          <img
            src="https://picsum.photos/seed/react-hero/640/480"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}