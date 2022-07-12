import React from 'react'
import styled from 'styled-components'



const TransactionDisplay = ({theTransactions, searchVal}) => {
   
  return (
    
    <TransactionContainer>
    
            {theTransactions.filter((val) => {
                
                if (val.name.toLowerCase().includes(searchVal)) {
                    return val;

                }else if (val.type.toLowerCase().includes(searchVal)) {
                  
                  return val;

                }else if (val.status.toLowerCase().includes(searchVal)) {

                  return val;

                }else if (val.date.includes(searchVal)) {
                  return val;
                }
               
              }).sort((a,b) => new Date(a.date) - new Date(b.date)).map((transact) => (
                <div>
                <TransactionHolder key={transact.id}>
                
                        <h3>{transact.name}</h3>
                        <p>{transact.status}</p>
                        <p>{transact.type}</p>
                        <p>{transact.date}</p>
                        
                </TransactionHolder>
                </div>
            ))}
     
       
    </TransactionContainer>
  )
}


const TransactionContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:2em;
`;


const TransactionHolder = styled.div`
    width:60vw;
    background:rgba(255,0,0,0.3);
    margin:0.6em;
    border-radius:5px;
    padding:1.2em;
    line-height:0.2em;
`;

export default TransactionDisplay