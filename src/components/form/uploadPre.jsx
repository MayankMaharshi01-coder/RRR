import React, { useEffect, useState } from "react";
import { getProducts } from "./api";

function uploadedPre() {
const [data, setData] = useState([])
    useEffect(() => {
        getProducts.then((res) => {
            setData(res)
        })
    },[])
return(<div>

    {data.map((items) => {<div>
    <img className="w-60 h-30 object-cover" src={items.thumbnail}/>
    <h1>{items.title}</h1>
    </div>})}
</div>)
};

export default uploadedPre;