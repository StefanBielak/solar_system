import "./HomePage.module.scss";

function HomePage() {

  const words = ["Welcome", "to", "our", "solar", "system"];

  return (
    <div>
      <h1 className="solar_title">
        {words.map((word, idx) => (
          <span
            key={idx}
            className="comet"
            style={{ animationDelay: `${idx * 0.5}s` }}
          >
            {word.split("").map((char, charIdx) => (
              <span key={charIdx}>{char}</span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default HomePage;
