import React from "react";

function Messageone({ name, lang }) {
  return (
    <div>
      {lang} {name}
    </div>
  );
}

const Messagetwo = (props) => {
  return <div>Message {props.name}</div>;
};

export default Messageone;
export { Messagetwo };
