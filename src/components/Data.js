import React, { useState } from "react";
import Operation from "./Opeartions";

export const CreateContext = React.createContext();
export default function Data() {
  const [state, setState] = useState({
    James: true,
    Leo: true,
    Rock: false,
    Flaming: true,
    Tom: false,
  });
  return (
    <>
      <CreateContext.Provider value={{ state, setState }}>
        <Operation />
      </CreateContext.Provider>
    </>
  );
}
