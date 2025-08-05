import React from "react";

function Item({ name, category }) {
  return (
    <li className="Item">
      <strong>{name}</strong> — <em>{category}</em>
    </li>
  );
}

export default Item;
