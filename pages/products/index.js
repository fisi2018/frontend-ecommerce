
import Layout from "../../components/layout";
import axios from "axios";
import CardProduct from "../../components/cardProduct";
import { useState,useEffect } from "react";
import {API} from "../../components/config";
export default function Products({productos}){
    const [start,setStart]=useState(0);
    const [arrayProducts,setArrayProducts]=useState([]);
    useEffect(()=>{
        if(localStorage.getItem("products"))
        setArrayProducts(localStorage.getItem("products"));
    },[]);
    
    const getData=(value)=>{
        setStart(value);
    }
    
    return(
        <Layout >
            <h1>Productos</h1>
            <p>En esta sección puedes explorar todos los productos disponibles</p>
            <div className="container-products">
                {productos.map((el)=>(
                    <CardProduct array={arrayProducts} sendData={getData} obj={el} key={el._id} name={el.name} priceMenor={el.priceMenor} 
                    priceMayor={el.priceMayor} description={el.description} 
                    _id={el._id}  />
                )) }
            </div>
            <style jsx>{
                `
                h1,p{
                    text-align:center;
                    background-color:#F6F6F6;
                    padding:1rem;
                }
                p{
                    padding:1rem 0 0 0;
                }
                h1{
                    font-weight:400;
                    font-size:2.5rem;
                }
                .container-products{
                    padding:1rem ;
                    background-color:#F6F6F6;
                    width:100%;
                    justify-content:space-around;
                    display:flex;
                    flex-wrap:wrap;
                }
                `
                }</style>
        </Layout>
    )
}
export async function getServerSideProps(){
    const url=`${API}/producto/products`;
    const res= await axios.get(url);
    const productos= await res.data;
    return{
        props:{
            productos
        }
    }
}