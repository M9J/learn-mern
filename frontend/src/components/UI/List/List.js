import React from "react";

const List = (props) => {
  let result = null;
  const hasItems = Array.isArray(props.items) ? props.items.length > 0 : false;
  if (hasItems) {
    result = props.items.map((item) => <li key={item.id}>{item.label}</li>);
  } else {
    result = <div>No Items</div>;
  }
  return <ul>{result}</ul>;
};

export default List;
