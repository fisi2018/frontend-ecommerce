import Link from "next/link";
import { useState } from "react";
import {API} from "./config";
export default function CardProduct(props){
    
   
    return(
        <div className="card-producto">
            <h3>{props.name}</h3>
            <img src={`${API}/producto/img/${props._id}`} alt={props.name}/>
            <p className="mayor">${props.priceMayor}</p>
            <p>${props.priceMenor}</p>
            <Link href={`/products/[id]`} as={`/products/${props._id}`} >
            <button  >Agregar</button>
            
            </Link>
            <style jsx>{`
                .card-producto{
                    background: content-box radial-gradient(black,black);
                    background-position:top;
                    background-repeat:no-repeat;
                    background-size:25rem 18rem;
                    background-color:white;
                    width:18rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-evenly;
                    align-items:center;
                    height:32rem;
                    box-shadow: 0 6px 8px rgba(0,0,0,0.2);
                    border-radius:12px;
                    margin:2rem;
                }
                img{
                    width:12rem;
                    border-radius:10px;
                    height:15rem;
                    box-shadow:0 2px 2px rgba(0,0,0,0.2)
                }
                h3{
                    text-align:center;
                    font-size:1.5rem;
                    font-weight:200;
                    letter-spacing:0.2rem;
                    color:white;
                    text-transform:uppercase;
                }
                p{
                    text-align:center;
                }
                .mayor{
                    font-size:1.5rem;
                    font-weight:bold;
                }
                button{
                    outline:0;
                    border:0;
                    font-family:"Montserrat";
                    background-color:#92d14f;
                    color:white;
                    padding:0.5rem;
                    cursor:pointer;
                    border-radius:10px;
                    width:30%;
                    box-shadow:0 2px 2px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                }
                button:hover{
                    transform: translateY(-0.5rem);
                    box-shadow: 0 12px 14px rgba(0,0,0,0.2);
                }
        
                
            `}</style>
        </div>
    )
}