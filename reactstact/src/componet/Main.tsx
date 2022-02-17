import react, { useState } from "React";

const Main = (props) => {
  let [name, namechange] = useState("메인입니다.");
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};
