import React, { useId } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const amountInputId = useId();

  return (
    <div className="currency-section bg-white p-3 rounded-lg text-sm flex">
      
      {/* Amount input */}
      <div className="w-1/4">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="0"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency section */}
      <div className="w-3/4 flex flex-col items-end text-right gap-2">

        <p className="text-black/40 mb-1">Currency Type</p>

        {/* Searchable input */}
        <input
          className="w-[55%] h-8 rounded border-2 border-gray-400 px-2"
          placeholder="Search currency"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        />

        {/* Dropdown select */}
        <select
          className="rounded-lg px-2 py-1 bg-green-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}