const CounterButton = ({ text, propsClicks, propsSetClicks }) => {
  return (
    <button onClick={() => propsSetClicks(propsClicks + 1)}>{text}</button>
  );
};

export default CounterButton;
