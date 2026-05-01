import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const full = "Syed Ali Hasan Moosavi";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < full.length) {
        setText(full.slice(0, i + 1));
        i++;
      } else clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h1 className="name">{text}</h1>

      <h2 className="title">
        Founder • SAYANJALI NEXUS • Creator of SYJ Token
      </h2>

      <p className="tagline">
        Architecting scalable Web3 ecosystems and digital economies.
      </p>

      <div className="metrics">
        <div>
          <h2>10K+</h2>
          <span>Community</span>
        </div>
        <div>
          <h2>$2M+</h2>
          <span>Ecosystem Value</span>
        </div>
        <div>
          <h2>4+</h2>
          <span>Ventures</span>
        </div>
      </div>
    </section>
  );
}
