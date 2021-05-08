import Link from "next/link";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import {API} from "./config";
import { useState,useEffect,useRef } from "react";
export default function Header(){
    const[basket,setBasket]=useState(null);
    const aside=useRef();
    
    useEffect(()=>{
        setBasket(localStorage.getItem("basket"));
    });
    const eliminarItem=(index)=>{
        let list=JSON.parse(localStorage.getItem("products"));
        let flag=false;
        let count=0;
        let newList={};
        for(let item in list){
            if(flag){
                newList={
                    ...newList,
                    [item-1]:list[item]
                }
            }else{
                if(index===item){
                    count=(list[item].count)?(list[item].count):1;
                    delete list[item];
                    flag=true;
                }
                else{
                    newList={
                        ...newList,
                        [item]:list[item]
                    }
                }
            }
        }
        if(basket-count===0){
            localStorage.removeItem("basket");
            localStorage.removeItem("products");
        }
        else{
            localStorage.setItem("basket",basket-count);
            localStorage.setItem("products",JSON.stringify(newList));
        }
        setBasket(basket-count);
    }
    const showList=()=>{
        aside.current.classList.toggle("is-active");
    };
    const buildList=()=>{
        if(basket>=1){
            let list=JSON.parse(localStorage.getItem("products"));
            let result=<></>;
            let total=0;
            let array=[];
            for(let product in list){
                let flag=false;
                array.forEach((el,index)=>{
                    if(list[product]._id===el.id){
                        array[index]={
                            id:el.id,
                            count:el.count+1
                        };
                        flag=true;
                    }
                });
                if(!flag){
                    array.push({
                        id:list[product]._id,
                        count:(list[product].count)?list[product].count:1
                    })
                }
            }
            for(let product in list){
                let price=0;
                let count=(list[product].count)?list[product].count:1;
                array.forEach((el)=>{
                    if(list[product]._id===el.id){
                        (el.count>=3)?price=list[product].priceMayor:price=list[product].priceMenor;

                    }
                });
                total=total+price*count;
                const url=`${API}/producto/img/${list[product]._id}/${list[product].color}`;
                result=<>{result}<li>
                    <img src={url} alt={list[product].name}/>
                    <p>{list[product].name}</p>
                    <p>{list[product].size}</p>
                <p>x{(list[product].count)?(list[product].count):1}</p>
                <p>${price*count}</p>
                    <button onClick={()=>eliminarItem(product)}>
                        <DeleteIcon/>
                    </button>
                    </li>
                
                        <style jsx>
                        {
                            `
                            img{
                                height:2rem;
                                width:auto;
                            }
                            button{
                                outline:0;
                                border:0;
                                cursor:pointer;
                                background-color:transparent;
                                transition: transform 0.3s ease;
                            }
                            button:hover{
                                transform:translateY(-0.5rem);
                            }
                            li{
                                display:flex;
                                justify-content:space-around;
                                align-items:center;
                                list-style:none;
                                padding:1rem 0.5rem;
                            }
                            `
                        }
                    </style>
                
                    </>;
            }
            
            return result=<>
            {result}
            <li>
                <p>Total: ${total}</p>
                <Link href="/formFinish">
                <a >Finalizar compra </a>
                </Link>
            </li>
            <style jsx>
            {  `
            li{
                list-style:none;
                position:relative;
                display:flex;
                justify-content:center;
                align-items:center;
                padding:1rem 0.5rem;
            }
            p{
                position:absolute;
                right:3rem;
                
            }
            a{
                text-decoration:none;
                padding:0.5rem 1rem;
                
                font-size:1rem;
                font-family:"Montserrat";
                background-color:transparent;
                position:relative;
                color:black;
                transition: all 0.3s ease;
            }
            a::after,a::before{
                content:"";
                position:absolute;
                border:2px solid black;
                width:40%;
                height:50%;
                transition: all 0.3s ease;
            }
            a::before{
                left:-0.15rem;
                border-color: black transparent transparent black;
                top:-0.15rem;
            }
            a::after{
                right:-0.15rem;
                border-color: transparent black black transparent;
                bottom:-0.15rem;
            }
            a:hover::before,
            a:hover::after{
                width:100%;
                border-color:black;
                height:100%;
            }
              
                

            `  }
            </style>
            </>;
        }
    }
    return(
        <header>
            <div>
                <h1>Importadora Fura Ltda</h1>
                <button name="products-list" onClick={showList}>
                <Badge badgeContent={basket} color="error">

                <ShoppingCartIcon  />
                </Badge>
                </button>
                <aside ref={aside}>
                    {
                      buildList()
                    }
                </aside>
            </div>
            <nav className="links-list">
                <Link href="/" >
                <a  >Inicio</a>
                </Link>
                <Link href="/about">
                <a className="about-element" >Acerca de nosotros</a></Link>
                <Link href="/products">
                <a >Nuestros productos</a></Link>
                <Link href="/contact">
                <a >Contáctanos</a></Link>
            </nav>
            <style jsx>{
                `
                aside{
                    position:fixed;
                    background-color:white;
                    display:flex;
                    flex-direction:column;
                    transform:translateY(100%);
                    bottom:0;
                    width:100%;
                    
                    transition: all 0.3s ease;
                }
                .is-active{
                    transform:translateY(0);
                    box-shadow: 0px -8px 55px 0px black;
                }
                li{
                    background-color:blue;
                }
                
                button{
                    color:white;
                    border:0;
                    outline:0;
                    padding:0;
                    background-color:transparent;
                    cursor:pointer;
                }
                header{
                    position:sticky;
                    top:0;
                    display:flex;
                    z-index:999;
                    flex-direction:column;
                    width:100%;
                    background-color:black;
                }
                
                h1{
                    color:white;
                    text-align:center;
                    font-weight:200;
                    
                }
                div{
                    padding:2rem;
                    display:flex;
                    justify-content:space-around;
                    flex-wrap:wrap;    
                }
                .links-list{
                    background-color:#fffc;
                    padding:0;

                }
                nav{
                    padding:.5rem;
                    display:flex;
                    justify-content:space-evenly;
                    flex-wrap:wrap;
                }
                a{
                    color:black;
                    padding: 1rem 0;
                    flex:1;
                    height:100%;
                    font-family:"Montserrat";
                    text-decoration:none;
                    text-align:center;
                    transition: all 0.3s ease;
                }
                a:hover{
                    background-color:white;
                }
                `
            }</style>
        </header>
    )
}