import React, {useEffect, useState} from "react";

import './App.css';
import { getAllStudents } from "./client";

function App(e) {
  const [students, setStudents] = useState([]);

  function fetchStudents() {
    getAllStudents()
      .then(res => res.json()
      .then(students => {setStudents(students);}
      ));
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  if (students && students.length > 0) {
    
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
