import React, { useState } from "react";
import todoimg from "../images/todoimg.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoimg} alt="todologo" />
            <figcaption> Hii i'm faruk shaikh </figcaption>
          </figure>

          <div className=" addItems ">
            <input
              type="text"
              placeholder="✍🏻 Add Items.... ✍🏻"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title=" Add Items "
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i
                    className="fas fa-trash-alt add-btn"
                    title=" Delete Items "
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className=" btn effect04 "
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
