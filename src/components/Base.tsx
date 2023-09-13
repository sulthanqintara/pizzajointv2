import React from "react";
import { Link } from "react-router-dom";
import { BaseType, Pizza } from "../App";
interface Props {
  addBase: (base: BaseType) => void;
  pizza: Pizza;
}

const Base: React.FC<Props> = ({ addBase, pizza }) => {
  const bases: BaseType[] = ["Classic", "Thin & Crispy", "Thick Crust"];
  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          const spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
