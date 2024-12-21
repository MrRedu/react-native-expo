import { useState } from "react";
export function useCounter() {
  const [count, setCount] = useState<number>(0);
  const increaseBy = (value: number) => {
    // if (value < 0 && count === 0) return;
    // setCount((prev) => prev + value);
    setCount(Math.max(count + value, 0));
  };

  return { count, increaseBy };
}
