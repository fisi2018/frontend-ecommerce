import Link from "next/link";
import { useState } from "react";
import {API} from "./config";
export default function CardProduct(props){
    
   
    return(
        <Link  href={`/products/[id]`} as={`/products/${props._id}`} >
        <div className="card-producto">
            <img src={`${API}/producto/img/${props._id}`} alt={props.name}/>
            <h3>{props.name}</h3>
            <p className="mayor">${props.priceMayor}</p>
            <p>${props.priceMenor}</p>
            <style jsx>{`
                
                .card-producto>h3{
                    margin:1rem 0.5rem;
                }
                .card-producto:hover{
                    transform: translateY(-1rem);
                    opacity:0.7;
                    box-shadow: 0 10px 12px rgba(0,0,0,0.2);
                }
                .card-producto{
                    cursor:pointer;
                    margin:1rem 0;
                    background-color:black;
                    display:flex;
                    height:fit-content;
                    width:17rem;
                    flex-direction:column;
                    justify-content:space-evenly;
                    align-items:center;
                    box-shadow: 0 6px 8px rgba(0,0,0,0.2);
                    border-radius:12px;
                    transition: all 0.3s ease;
                }
                img{
                    width:100%;
                    border-radius:12px 12px 0 0;
                    margin-top:0;
                    height:auto;
                    box-shadow:0 2px 2px rgba(0,0,0,0.2)
                }
                h3{
                    text-align:center;
                    margin:0.5rem 0;
                    font-size:1.5rem;
                    font-weight:200;
                    letter-spacing:0.2rem;
                    color:white;
                    text-transform:uppercase;
                }
                p{
                    text-align:center;
                    margin:0.5rem 0;
                    color:white;
                }
                .mayor{
                    font-size:1.5rem;
                    padding: 0.5rem 0;
                    width:80%;
                    background-color:white;
                    color:black;
                }
                @media screen and (max-width:480px){
                    .card-producto{
                        margin: 2rem 0;
                    }
                }
        
                
            `}</style>
        </div>
        </Link>
    )
}