import * as React from "react";
const Loader = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <circle
      fill="#514D4F"
      stroke="#514D4F"
      strokeWidth={5}
      r={5}
      cx={40}
      cy={100}
    >
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur={2}
        values="1;0;1;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin={-0.4}
      />
    </circle>
    <circle
      fill="#514D4F"
      stroke="#514D4F"
      strokeWidth={5}
      r={5}
      cx={100}
      cy={100}
    >
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur={2}
        values="1;0;1;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin={-0.2}
      />
    </circle>
    <circle
      fill="#514D4F"
      stroke="#514D4F"
      strokeWidth={5}
      r={5}
      cx={160}
      cy={100}
    >
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur={2}
        values="1;0;1;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin={0}
      />
    </circle>
  </svg>
);
export default Loader;
