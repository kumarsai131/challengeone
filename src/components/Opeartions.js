import { useContext, useEffect } from "react";
import { CreateContext } from "./Data";
export default function Operation() {
  const { state, setState } = useContext(CreateContext);

  function shuffleLights() {
    const array = Object.keys(state);
    const newState = Object.assign({}, state);
    const random = Math.floor(Math.random() * array.length);
    newState[array[random]] = !newState[array[random]];
    setState(newState);
  }

  useEffect(() => {
    const X = setInterval(shuffleLights, 2000);
    return () => clearInterval(X);
  }, [state]);
  return (
    <div style={{ border: "2px solid red", width: "60vh", fontSize: "2em" }}>
      {Object.keys(state).map((e) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div style={{ width: "10vh" }}>{`${e}`}</div>
            <div style={{ width: "10vh" }}>:</div>{" "}
            <div style={{ width: "10vh" }}>{`${state[e] ? "🟢" : "🔴"}`}</div>
          </div>
        );
      })}
    </div>
  );
}
