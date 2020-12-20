import React, { useEffect, useRef, useState } from "react";

function CounterFeature(props) {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const preCount = useRef(count);
  useEffect(() => {
    preCount.current = count;
  }, [count]);
  const handlerClick = (_) => {
    setCount(count + 1);
  };
  return (
    <div>
      Pre: {preCount.current}
      Next: {count}
      <button onClick={() => handlerClick()}>Click me</button>
    </div>
  );
}

export default CounterFeature;
