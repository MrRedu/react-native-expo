import { Button } from "../components/Button";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { count, increaseBy } = useCounter();
  return (
    <>
      <h2 className="text-2xl font-bold">{`</CounterComponent>`}</h2>
      <div className="flex gap-4 items-center text-center">
        <Button onClick={() => increaseBy(-1)}>-1</Button>
        <span className="mx-4 min-w-[72px]">Count: {count}</span>
        <Button onClick={() => increaseBy(1)}>+1</Button>
      </div>
    </>
  );
};
