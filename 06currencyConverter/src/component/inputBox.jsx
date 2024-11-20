import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmmountchange,
    onCurrencychange,
    currensyOption = [],
    selectCurrency = "usd",
    amountDisable= false,
    currensyDisable = false,
    className = "",
   

}) {
    const amountInputId = useId()//unique id generat krta h 
    return (

  <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onClick={(e)=> onAmmountchange && onAmmountchange(Number(e.target.value))}
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            disabled={currensyDisable}
            value={selectCurrency}
            onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}

        >  
        {/* //  ydi loop use kr rhe h to key likhna h taki check kre ki dom me ek hi element bar create to ho nhi rha h and performance lani to bhi key pass karna h*/}
            {currensyOption.map((Currency)=>(
                <option key={Currency}value="usd">
                usd
               </option>
            //    component return
            ))}          
        
        </select>
    </div>
</div>
);
}

export default InputBox;

    
