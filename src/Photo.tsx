import "./App.css";
import { useInView } from "react-intersection-observer";
interface Iphoto {
  name: string;
  imageUrl: string;
}
export default function Photo({ name, imageUrl }: Iphoto) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="photo-card">
      {inView ? (
        <img src={imageUrl} alt="Example" />
      ) : (
        <div className="photo-card__skeleton"></div>
      )}

      <h4>{name}</h4>
    </div>
  );
}
