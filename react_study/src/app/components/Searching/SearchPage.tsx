"useClient";

import React, {useState} from "react";

import Searching from "./Searching";
import LinearSearch from "./LinearSearch/LinearSearch";
import BinarySearch from "./BinarySearch/BinarySearch";

const SearchPage = () => {
  const [isLinearSearchVisible, setisLinearSearchVisible] = useState(false);
  const [isBinarySearchVisible, setIsBinarySearchVisible] = useState(false);
  
  return (
    <div>
        <Searching />
        <button onClick={() => setisLinearSearchVisible((prevState: boolean) => !prevState)}>Show Linear Search</button>
        {isLinearSearchVisible && <LinearSearch />}
        <button onClick={() => setIsBinarySearchVisible((prevState: boolean) => !prevState)}>Show Binary Search</button>
        {isBinarySearchVisible && <BinarySearch />}
    </div>
  );
}

export default SearchPage;