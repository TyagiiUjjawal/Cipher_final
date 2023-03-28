import React from "react";
import HeatMap from "react-heatmap-grid";

// const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
// console.log(xLabels);
// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

console.log(xLabelsVisibility);
const xLabels = [
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Oct",
  "Nov",
  "Dec",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Oct",
  "Nov",
  "Dec",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Oct",
  "Nov",
  "Dec",
];
const yLabels = ["Mon", "Wed", "Fri"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );
console.log(yLabels);
console.log(data);
const HeatMapp = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ marginLeft: "19px" }}>Cipher Map</h3>
        <div style={{ fontSize: "13px", alignSelf: "center" }}>
          <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            xLabelsLocation={"top"}
            xLabelWidth={90}
            data={data}
            squares
            height={50}
            onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
            cellStyle={(background, value, min, max, data, x, y) => ({
              background: `rgb(0, 151, 230, ${
                1 - (max - value) / (max - min)
              })`,
              fontSize: "11.5px",
              color: "#444",
            })}
            // cellRender={(value) => value && <div>{value}</div>}
          />
        </div>
      </div>
    </>
  );
};

export default HeatMapp;
