import "./App.css";
import { useInView } from "react-intersection-observer";

export default function DinamiBanner() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div>
      <div className="section">
        <h2>Section</h2>
      </div>

      <div ref={ref} className={`section banner ${inView ? "active" : ""}`}>
        <h2>баннер</h2>
      </div>

      <div className="section">
        <h2>Section</h2>
      </div>
    </div>
  );
}
