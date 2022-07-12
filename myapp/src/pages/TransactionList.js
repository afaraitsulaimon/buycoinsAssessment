import React from 'react'
import styled from 'styled-components'
import TransactionDisplay from './TransactionDisplay'

const TransactionList = ({transactions, searchVal, setSearchVal, handleChange}) => {
  return (
    <Container>
        <Main>
            <SearchContainer>
                <SearchHolder>
                    <SearchInputHolder type='text' value={searchVal} onChange={handleChange} placeholder="Enter search in lower case" />
                    <ButtonHolder>Search</ButtonHolder>
                </SearchHolder>
            </SearchContainer>

            <FilterContainer>
            <FiltersHolder>
                <FilterByDate type='date' onChange={handleChange}/>
                    
              

                <FilterByType onChange={handleChange}>
                    <option>Type</option>
                    <option value="b2b" >B2B</option>
                    <option value="p2p">P2P</option>
                </FilterByType>


                <FilterByStatus onChange={handleChange}>
                    <option>Status</option>
                    <option value="sold">Sold</option>
                    <option value="available">Available</option>
                    
                </FilterByStatus>

                <FilterByName onChange={handleChange}>
                    <option>Name</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="ethereum">Ethereum</option>
                    <option value="cardano">Cardano</option>
                    <option value="tether">Tether</option>
                </FilterByName>

            </FiltersHolder>
            </FilterContainer>

           

            <div>
                <TransactionDisplay theTransactions={transactions} searchVal={searchVal} />
            </div>
        </Main>
    </Container>
  )
}


const Container = styled.div`
    width:100%;
    min-height:100vh;
    background:pink;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Main = styled.div`
    height:100%;
    width:80%;
`;

const SearchContainer = styled.div`
min-height:60px;
   display:flex;
   justify-content:center;
   align-items:center;
`;

const SearchHolder = styled.div`
    min-height:50px;
    width:50%;
    background:white;
    border-radius:4px;
    display:flex;
    justify-content:space-around;
    align-items:center;

   
`;


const SearchInputHolder = styled.input`
  width:70%;
  height:40px;
  border-radius:0px;
  border:none;
`;


const ButtonHolder = styled.button`
  width:25%;
  height:45px;
  border:none;
  cursor:pointer;
`;


const FilterContainer = styled.div`
    min-height:60px;
    width:100%;
   display:flex;
    justify-content:space-around;
    align-items:center;
`;


const FiltersHolder = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const FilterByDate = styled.input`
    width:20%;
    height:30px;
border-radius:4px;
border:2px solid #B9D9D7;
color:#B9D9D7;
font-weight:700;
`;

const FilterByType = styled.select`
    width:20%;
    height:30px;
border-radius:4px;
border:2px solid #B9D9D7;
color:#B9D9D7;
font-weight:700;
`;

const FilterByStatus = styled.select`
width:20%;
height:30px;
border-radius:4px;
border:2px solid #B9D9D7;
color:#B9D9D7;
font-weight:700;
`;

const FilterByName = styled.select`
width:20%;
height:30px;
border-radius:4px;
border:2px solid #B9D9D7;
color:#B9D9D7;
font-weight:700;
`;



export default TransactionList