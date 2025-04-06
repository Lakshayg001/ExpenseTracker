import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Income_Expenses from './components/Income_Expenses'
import Transaction_list from './components/Transaction_list'
import AddTransaction from './components/AddTransaction'
import "./index.css";
import { GlobalProvider } from './context/Globalstate'
function App() {
  
  return (
      <GlobalProvider>
        <Header />
        <div className='container'>
       <Balance/>
       <Income_Expenses/>
       <Transaction_list/>
       <AddTransaction/>

        </div>
    

      </GlobalProvider>

  )
}

export default App
