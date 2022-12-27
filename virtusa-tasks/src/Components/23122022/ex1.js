const Example1 = (props) => {
  console.log(props.gender);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const color = (e) => {
    console.log(e.target.value);
    return props.color(e.target.value);
  };

  return (
    <>
      <div>
        Welcome
        {props.gender === "Male" ? " Mr." : " Ms."} {props.name}
      </div>
      <div>Date is {date}</div>
      <div>
        <select onChange={(e) => color(e)}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    </>
  );
};

export default Example1;
