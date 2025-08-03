import React, {useId} from 'react';

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const amntInptId = useId()
  
  return (
<div className="currency-section bg-white p-3 rounded-lg text-sm flex">
<div className="w-1/2"  >
  <label htmlfor={amntInptId} className="text-black/40 mb-2 inline-block">{label}</label>
    <input
    className="outline-none w-full bg-transparent py-1.5"
    type="number"
    id={amntInptId}
    placeholder="0"
    value={amount}
    disabled={amountDisabled}
    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />
    </div>
   <div className="w-1/2 flex flex-wrap justify-end text-right">
   <p className="text-blac/40k mb-2 w-full">Currency Type
   </p>
    <select 
    className="rounded-lg px-1 py-1 bg-green-100 cursor-pointer outline-none"
    id="from-currency"
    value={selectCurrency}
    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
    >{
      currencyOptions.map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>
      ))
    }
    </select>
  </div>
</div>);
}

