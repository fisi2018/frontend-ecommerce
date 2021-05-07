import { useState,useEffect } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import {API} from "../components/config";
import axios from "axios";
export default function FormFinish(){
    const [form,setForm]=useState({
        name:"",
        phone:"",
        address:""
    });
    const [error, setError] = useState(false)
    useEffect(()=>{
        
    },[]);
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    const confirm= async ()=>{
        if(form.name==="" || form.phone===""){
            setError(true);
            setTimeout(()=>setError(false),3000);
            return;
        }
        let list=JSON.parse(localStorage.getItem("products"));
        let total=0;
        let array={};
        for(let prod in list){
            let obj={
                producto:list[prod]._id,
                size:list[prod].size,
                color:list[prod].color,
                count:(list[prod].count)?(list[prod].count):1
            };
            array={
                ...array,
                [prod]:obj
            };
            if(list[prod].count){
                if(list[prod].count>=3){

                    total=total+parseInt(list[prod].count)*parseFloat(list[prod].priceMayor);
                }else{

                    total=total+parseInt(list[prod].count)*parseFloat(list[prod].priceMenor);
                }
            }else{
               total=total+parseFloat(list[prod].priceMenor);
            }
        }
        let orden={
            name:form.name,
            phone:form.phone,
            address:form.address,
            total,
            list:array
        };
        const url=`${API}/order/createOrder`;
        let res= await axios.post(url,{
            name:form.name,
            phone:form.phone,
            address:form.address,
            total,
            list:array
        });
        let message= await res.data;
        localStorage.removeItem("basket");
        localStorage.removeItem("products");
        setForm({
            name:"",
            phone:"",
            address:""
        })
    }
    return(
        <Layout>
            <h1>Datos de compra</h1>
            <p>Rellene el siguiente formulario para confirmar su compra</p>
            <div className="container">
                <div className="form-block">

                <input value={form.name} onChange={handleChange} placeholder="Nombre" name="name" type="text" required />
                <input value={form.phone} onChange={handleChange} placeholder="Celular" name="phone" type="text" required/>
                <input value={form.address} onChange={handleChange} placeholder="Dirección" name="address" type="text" required/>
            {error && <p>Es necesario rellenar los campos de nombre y celular</p> }
                <Link href="/products"  >
                    <button onClick={confirm} >Confirmar compra</button>
                    </Link>
                
                </div>
            </div>
            <style jsx>
            {`
            h1{
                font-weight:400;
                text-align:center;
                padding:0.5rem;
            }
            p{
                text-align:center;
                margin-top:1rem;
            }
            .container{
                min-height:100vh;
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .form-block{
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                width:25rem;
                height:30rem;
                align-items:center;
                background-color:white;
                border-radius:10px;
                box-shadow: 0 8px 10px rgba(0,0,0,0.2);
            }
            button{
                box-shadow:0 2px 2px rgba(0,0,0,0.2);
                color: white;
                outline:0;
                cursor:pointer;
                border:0;
                font-family:"Montserrat";
                background-color:black;
                padding: 0.5rem 1rem;
                border-radius:8px;
                transition: all 0.3s ease;
            }
            button:hover{
                transform: translateY(-1rem);
                box-shadow: 0 8px 10px rgba(0,0,0,0.2);
            }
            input{
                font-family: "Montserrat";
                height: 1.5rem;
                font-size: 1.25rem;
                outline: 0;
                border: 0;
                border-bottom: 1px solid black;
            }
            `}
            </style>
        </Layout>
    )
}