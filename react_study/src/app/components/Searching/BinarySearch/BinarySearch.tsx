"useClient";

import React, {useState} from "react";

const binarySearchDefinition: Array<String> = [
  "Binary search is much faster form of search",
  "Rather than eliminating one element at a time",
  "you can eliminate \"half\" of the remaining elements at a time",
  "Binary search only works on sorted arrays!",
  "Is based on divide and conquer",
  "We split up the array in 2 pices",
  "We pick the pivot point in the middle",
  "Check the left side and right side to see on which half is the element"
];
const binarySearchExample: Array<String> = [
    "[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]",
    "Search for 15",
    "Left -      the middle is 11           - Right",
    "Check if 15 is less or greater than 11",
    "it is greater, so the left side is eliminated",
    "[12, 15, 16, 17, 18, 19]",
    "Left- the middle is 17 - Right",
    "Check if 15 is less or greater than 17",
    "it is less than 17, so the right side is eliminated",
    "[12, 15, 16]",
    "Left - the middle is 15 - Right",
    "check if 15 is equal to 15",
    "the binary search is done"
]
const binarySearchPseudocode: Array<String> = [
    "This function accepts a sorted array and a value",
    "Create a left pointer at the start of the array",
    "and a rught pointer at the end of the array",
    "While the left pointer comes before the right pointer:",
    "Create a pointer in the middle",
    "If you find the value you want, return the index",
    "If the value is too large, move the right pointer down",
    "If you never find the value, return -1"
];
const binarySearchFunction: {functionItems: Array<String>, functionResult: Array<String>}= {
  functionItems: [
    "function binarySearch(arr, elem) {",
    "   let start = 0;",
    "   let end = arr.length - 1;",
    "   let middle = Math.floor((start + end) / 2)",
    "   while(arr[middle] !== elem && start <= end) {",
    "       if(elem < arr[middle]) {",
    "           end = middle - 1;",
    "       } else {",
    "           start = middle + 1;",
    "       }",
    "       middle = Math.floor((start + end) / 2)",
    "   }",
    "   if (arr[middle] === elem) {",
    "       return middle",
    "   }",
    "   return -1;",
    "}"
  ],
  functionResult: [
    "binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)",
    "start = 2, middle = 9, end = 30",
    "28 (the searched item) is greater than 9 (middle)",
    "so the left side is eliminated",
    "[13, 15, 28, 30]",
    "start = 13, middle = 15, end = 30",
    "28 (the searched item) is greater than 15 (middle)",
    "so the left side is eliminated",
    "[28, 30]",
    "start = 28 middle = 28 end = 30",
    "28 (the searched item) is equal to 28 (middle item), the search is done"
  ]
}

const BinarySearch = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const title: String = "Binary Search";
  const binarySearchDefinitionListItems = binarySearchDefinition.map((item: String, idx: number) => <li key={idx}>{item}</li> );
  const binarySearchExampleListItems = binarySearchExample.map((item: String, idx: number) => <li key={idx}>{item}</li>)
  const binarySearchPseudocodeListItems = binarySearchPseudocode.map((item: String, idx: number) => <li key={idx}>{item}</li>)
  const BinarySearchFunctionItemsListItems = binarySearchFunction["functionItems"].map((item: String, idx: number) => <li key={idx}>{item}</li>);
  const BinarySearchFunctionItemsResult = binarySearchFunction["functionResult"].map((item: String, idx: number) => <li key={idx}>{item}</li>);

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <input type="checkbox" onChange={(e) => setIsCompleted(e.target.checked)} /><span>Completed?</span>
        <h3>Binary Search Definition</h3>
        <ul>{binarySearchDefinitionListItems}</ul>
      </div>
      <div>
        <h3>Binary Search Example</h3>
        <ul>{binarySearchExampleListItems}</ul>
      </div>
      <div>
        <h3>Binary Search Pseudocode</h3>
        <ul>{binarySearchPseudocodeListItems}</ul>
      </div>
      <div>
        <h3>Binary Search Function</h3>
        <ul>{BinarySearchFunctionItemsListItems}</ul>
        <ul>{BinarySearchFunctionItemsResult}</ul>
      </div>
    </div>
  );

}

export default BinarySearch;