"useClient";

import React from "react";

const linearSearchDefinition: String = "Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want";
const linearSearchExample: Array<String> = [
"const myArr = [1, 2, 7, 8, 5]",
"check myArr[0] if is equal to 7",
"check myArr[1] if is equal to 7",
"check myArr[2] if is equal to 7",
"returns true or the index of it",
];
const linearSearchBigO: Array<String> = [
  "time complexity",
  "Best case: O(1)",
  "Average: O(n)",
  "Worst case: O(n)"
]


const LinearSearch = () => {
  const title: String = "Linear Search";
  const linearSearchExampleListItems = linearSearchExample.map((item: String, idx: number) => <li key={idx}>{item}</li>)
  const linearSearchBigOListItems = linearSearchBigO.map((item: String, idx: number) => <li key={idx}>{item}</li>);

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h3>Linear Search definition</h3>
        <p>{linearSearchDefinition}</p>
      </div>
      <div>
        <h3>Linear Search example</h3>
        <ul>{linearSearchExampleListItems}</ul>
      </div>
      <div>
        <h3>Linear Search Big O</h3>
        <ul>{linearSearchBigOListItems}</ul>
      </div>
    </div>
  );
}

export default LinearSearch;