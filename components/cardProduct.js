import Link from "next/link";
import { useState } from "react";
import {API} from "./config";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Like from '@material-ui/icons/FavoriteBorder';
import {useCard} from "../tools/hooks/useCard";
export default function CardProduct(props){
    const {isClick,handleClick}=useCard(false);
    return(
        <div onClick={handleClick} className={`card-producto ${isClick && `click`}`}>
            <img src={`${API}/producto/img/${props._id}`} alt={props.name}/>
            <h3>{props.name}</h3>
            <p className="mayor">${props.priceMayor}</p>
            <p>${props.priceMenor}</p>
        <div className={`actions-block ${isClick && `clicked`}`}>
                <Link href={`/products/[id]`} as={`/products/${props._id}`}>
                    <button className="button-car">

                <ShoppingCartIcon style={{fontSize:40}} />
                    </button>
                </Link> 
                <button>
                <Like style={{fontSize:40}} />
                </button>
            </div> 
            <style jsx>{`
            button{
                background:transparent;
                display:flex;
                border:0;
                outline:0;
                cursor:pointer;
                color:white;
                align-items:center;
                justify-content:center;
                transition: all .3s ease;
            }
            .button-car:hover{
                color:#90E460;
            }
            button:hover{
                transform:translateY(-0.5rem);
                color:#E0245E;
            }
            .card-producto.click{
                opacity:1;
            }
            
            .actions-block.clicked{
                z-index:998;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                transform:translateY(0);
            }
            
            .actions-block{
                    background-color:rgba(0,0,0,0.7);
                    position:absolute;
                    border-radius:12px;
                    display:none;
                    height:100%;
                    z-index:-1;
                    transform:translateY(-100%);
                    transition: transform 0.5s ease;
                }
                .card-producto>h3{
                    margin:1rem 0.5rem;
                }
                .card-producto:hover{
                    transform: translateY(-1rem);
                    opacity:0.8;
                    box-shadow: 0 10px 12px rgba(0,0,0,0.2);
                }
                .card-producto{
                    cursor:pointer;
                    position:relative;
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
                    width:50%;
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
    )
}