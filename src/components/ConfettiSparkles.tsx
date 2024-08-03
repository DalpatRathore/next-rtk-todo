import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiSparkles = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width - 100}
      height={height}
      numberOfPieces={2000}
      recycle={false}
    />
  );
};

export default ConfettiSparkles;
