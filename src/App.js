import Accordion from "./accordion";
import Nav from "./nav";
import Plan from "./plan";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3 className="title">Pain Medicine Plan</h3>
      <div className="main">
        <Accordion />
        <Plan />
      </div>
    </div>
  );
}
