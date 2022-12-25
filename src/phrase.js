import { useContext, useState } from "react";
import "./phrase.css";
import { PlanContext } from "./planContext";
export default function Phrase({ phrase }) {
  const [collapsed, setCollapsed] = useState("none");
  const [list, setList] = useContext(PlanContext);
  return (
    <div>
      <div
        className="category"
        onMouseDown={() => {
          if (collapsed === "none") {
            setCollapsed("block");
          } else {
            setCollapsed("none");
          }
        }}
      >
        <div>{phrase.category}</div>
        <div className="sep"></div>
        <div>{collapsed === "none" ? "+" : "-"}</div>
      </div>
      <div className="phrases" style={{ display: collapsed }}>
        {phrase.phrases.map((p, index) => {
          return (
            <div key={p.id}>
              <input
                type="checkbox"
                checked={list.includes(p)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setList((prevList) => [...prevList, p]);
                  } else {
                    setList((prevList) =>
                      prevList.filter((item) => item.id !== p.id)
                    );
                  }
                }}
              />
              <label>{p.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
