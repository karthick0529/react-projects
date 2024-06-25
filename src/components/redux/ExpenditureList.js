import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp } from "./expSlice";

function ExpenditureList() {
  const dispatch = useDispatch();

  // useSelector((state) => state.reducerName.expSliceName)
  // useSelector((state) => state.expSliceName.stateName)

  const expenditureData = useSelector(
    (state) => state.myexpenditure.expenditure
  );
  console.log("expenditure", expenditureData);

  const deleteExpenditure = (id) => {
    dispatch(deleteExp(id));
  };

  return (
    <div>
      ExpenditureList
      {expenditureData.map((item) => (
        <li key={item.id}>
          {item.category}
          <button onClick={() => deleteExpenditure(item.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default ExpenditureList;
