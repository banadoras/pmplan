import Phrase from "./phrase";
import phrases from "./data";
import "./accordion.css";
export default function Accordion() {
  return (
    <div className="accordion">
      {phrases.map((phrase, index) => {
        return <Phrase key={index} phrase={phrase} />;
      })}
    </div>
  );
}
