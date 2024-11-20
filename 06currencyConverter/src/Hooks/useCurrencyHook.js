import { useEffect,useState } from "react";

//react query automatic handle kr leta json data me usko string se convert nhi karna padta



function useCurrencyHook(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json${currency}`)
        .then((res) => res.json()) //json me conversion
        .then((res) => setData(res[currency]))// json data store and me har . se karna jaruro nhi h  me [] se bhi access kr skta hu.
        // ab direct json ko ui me reflect nhi kr skte h to setData se krte h useState ke Through
        consol.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyHook; // here we use the  direct method ko export kr denge so any dataa aata h to vha se bhi access kr skte h
//so here we create customHook