import { createContext, useState } from "react";

export const Couter = createContext ()

export default function CouterContext({children}){ 
const [countPro,setCountPro]=useState(JSON.parse(localStorage.getItem('ListProduct'))? JSON.parse(localStorage.getItem('ListProduct')).length :0);
const [productDetail,setProductDetail]=useState() ;
const [ dataSearch,setdataSearch]=useState([]) ;
const [ checkUser, setCheckUser]=useState(localStorage?.getItem('UserId')||false);
const Item={
    countPro,
    setCountPro,
    productDetail,
    setProductDetail,
    checkUser, setCheckUser,
    dataSearch,setdataSearch
}


return (
       <Couter.Provider value={Item}>
           {children}
       </Couter.Provider>
   )
 }


