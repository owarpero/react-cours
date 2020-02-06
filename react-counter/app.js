import React from "react";
import Counter from "./Counter";
//import callBack from "./callBack";

const options = [
  {
    initial: 1,
    incrStep: 1,
    decrStep: -1,
    minRange: -10,
    maxRange: 10
  },
  {
    initial: 5,
    incrStep: 5,
    decrStep: -5,
    minRange: -25,
    maxRange: 25
  },
  {
    initial: 10,
    incrStep: 10,
    decrStep: -10,
    minRange: -50,
    maxRange: 50
  }
];
export default function App() {
  return (
    <div>
      <Counter options={options} />
    </div>
  );
}
