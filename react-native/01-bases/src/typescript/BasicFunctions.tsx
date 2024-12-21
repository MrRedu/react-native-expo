export const BasicFunctions = () => {
  const numberA: number = 1;
  const numberB: number = 3;
  const addTwoNumbers = (a: number, b: number): number => a + b;

  return (
    <>
      <h2>{`</BasicFunctions>`}</h2>
      <span>
        El resultado de sumar {numberA} y {numberB} es:{` `}
        {addTwoNumbers(numberA, numberB)}
      </span>
    </>
  );
};
