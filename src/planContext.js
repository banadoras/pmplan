import { createContext, useState } from "react";

const PlanContext = createContext();
const PlanProvider = (props) => {
  const [list, setList] = useState([]);
  return (
    <PlanContext.Provider value={[list, setList]}>
      {props.children}
    </PlanContext.Provider>
  );
};
export { PlanContext, PlanProvider };
