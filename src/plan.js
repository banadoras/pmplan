import { useContext, useEffect, useRef, useState } from "react";
import { PlanContext } from "./planContext";
import "./plan.css";
export default function Plan() {
  const [list, setList] = useContext(PlanContext);
  const [finalPlan, setFinalPlan] = useState("");
  const [finalInstructions, setFinalInstructions] = useState("");
  const ta = useRef();
  const ta2 = useRef();
  useEffect(() => {
    console.log(list);
    let workingPlan = "";
    let instructions = "";
    list.forEach((element) => {
      workingPlan += "- " + element.description + "\n";
      instructions +=
        "- " +
        (element.instruction ? element.instruction : element.description) +
        "\n";
    });
    setFinalPlan(workingPlan);
    setFinalInstructions(instructions);
  }, [list]);
  return (
    <div className="plan">
      <h4>Plan</h4>
      {finalPlan === "" ? <p className="no-plan">No plan items</p> : ""}
      {/* <p>{finalPlan === "" ? "No plan items" : ""}</p> */}
      <textarea ref={ta} value={finalPlan}></textarea>
      <h4>Patient Instructions</h4>
      {finalInstructions === "" ? (
        <p className="no-plan">No Instructions items</p>
      ) : (
        ""
      )}
      <textarea ref={ta2} value={finalInstructions}></textarea>
      <div className="buttons">
        <button
          onClick={() => {
            ta.current.select();
            navigator.clipboard.writeText(finalPlan);
          }}
        >
          Copy Plan
        </button>
        <button
          onClick={() => {
            ta2.current.select();
            navigator.clipboard.writeText(finalPlan);
          }}
        >
          Copy Instructions
        </button>
        <button onClick={() => setList([])}>Reset Plan</button>
      </div>
    </div>
  );
}
