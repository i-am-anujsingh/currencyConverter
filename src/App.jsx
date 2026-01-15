import { useState } from 'react'
import './App.css'
import InputBox from './myCompos/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
//import {getImageUrl} from '../utilities/utils.js'

function App() {
  
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  
  const swap = () => {
    const temp=from;
    setFrom(to)
    setTo(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
  return (
     <div
        className="w-full h-screen flex flex-wrap justify-center items-top bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(bg.jpg)`,
            backgroundPosition: "center"
        }}
    >
    <h1 className="pt-5 text-5xl text-white font-extrabold md:text-7xl"><center>Currency Converter</center>
    </h1>
        <div className="w-full px-3">
            <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-4 backdrop-blur-sm ">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label={from}
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={ swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label={to}
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default App;