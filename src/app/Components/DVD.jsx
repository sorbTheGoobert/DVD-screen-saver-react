import { useRef, useState } from "react";

export const DVD = (props) => {
  // * Init
  const [pos, setPos] = useState([0, 0]); // Position (x, y)
  const [speed, setSpeed] = useState(props.speed); // speed[2] - hurd (x, y)
  const w = props.w; // Relativiin urt
  const h = props.h; // Relativiin urgun

  // Interval
  const interval = useRef(null);
  if (interval.current) {
    clearInterval(interval.current);
  }

  // * Gol funtion
  const update = () => {
    // Temp
    const posTemp = [...pos];
    const speedTemp = [...speed];

    // X hudulguun shalga
    if (posTemp[0] < 0 || posTemp[0] + 48 > w) {
      speedTemp[0] *= -1;
    }
    posTemp[0] = posTemp[0] + speedTemp[0];

    // Y hudulguun shalga
    if (posTemp[1] < 0 || posTemp[1] + 48 > h) {
      speedTemp[1] *= -1;
    }
    posTemp[1] += speedTemp[1];

    // Duusga
    setPos([...posTemp]);
    setSpeed([...speedTemp]);
  };

  // loop
  interval.current = setInterval(update, 1000 / 60);

  return (
    <div
      className={`w-12 h-12 bg-red-500 absolute`}
      // ! ZAAVAL STYLE DOTOR BAIH HEREGTEI SHUU
      // * Ugui bol className buten valuegaa avdaggui yum
      style={{ left: pos[0], top: pos[1] }}
    ></div>
  );
};
