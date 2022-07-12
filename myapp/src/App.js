import React, {useEffect, useState} from "react";
import TransactionList from "./pages/TransactionList";

function App() {

  const [transactions, setTransactions] = useState(null);
  const [searchVal, setSearchVal] = useState("");


   const handleChange = (e) => {

      setSearchVal(e.target.value);
   }
 
   
  useEffect(()=> {
    fetch('http://localhost:8000/transactions')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTransactions(data)
      })
  }, [])
  return (
    <div className="App">
         
        {transactions && <TransactionList transactions={transactions} handleChange={handleChange} searchVal={searchVal} setSearchVal={setSearchVal}  />}

 
   </div>
  );
}

export default App;
