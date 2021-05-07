import Layout from "../../components/layout";
import { useRouter} from "next/router";
import axios from "axios";
import {API} from "../../components/config";
import { useEffect, useState } from "react";
export default function Product({producto}){
    const router=useRouter();
    const [id,setId]=useState(null);
    const [sent,setSent]=useState(null);
    const [product,setProduct]=useState({});
    const [error, setError] = useState(false);
    const [url,setUrl]=useState(`${API}/producto/img/${producto._id}`);
    const [sizes,setSizes]=useState([]);
    useEffect(()=>{
        setSizes(producto.sizes.split(","));
    },[]);
    if(router.isFallback){
        return <h1>CARGANDO ...</h1>
    }

    useEffect(()=>{
        if(id){

            const $p=document.getElementById(id);
            $p.classList.toggle("is-select");
        
        }
    },[url])
    const changeColor=(color,ide)=>{
        if(id){
            if(product.color!==color){

                const $p=document.getElementById(id);
                $p.classList.toggle("is-select");
            }
        }
        setId(ide);
        setProduct({
            ...product,
            color
        });
        setUrl(`${API}/producto/img/${producto._id}/${color}`);
    }
    const loadColors=()=>{
       return producto.colors.map((el)=>(
            <>
            <p id={el._id} key={el._id}>{el.nameColor}</p>
            <button onClick={()=>changeColor(el.nameColor,el._id)}></button>
            <style jsx>
                {`
                p{
                    color:white;
                    margin-left:0.25rem;
                }
                .is-select{
                    font-weight:600;
                }
                button{
                    margin:0 0.5rem;
                    outline:0;
                    border:0;
                    width:2rem;
                    height:2rem;
                    border-radius:50%;
                    cursor:pointer;
                    background-color:${el.codeColor};
                }
                `}
            </style>
            </>
        ))
    }
    useEffect(()=>{
        if(product.size){
            const $p=document.getElementById(product.size);
            $p.classList.toggle("is-selected");
            
        }
    },[product.size]);
    const chooseSize=(size)=>{
        if(product.size){
            if(product.size!==size){
                const $p=document.getElementById(product.size);
                $p.classList.toggle("is-selected");
            }
           
        }
        setProduct({
            ...product,
            size
        });

    }
    const agregarProducto=()=>{
        if(!product.size || !product.color){
            setError(true);
            setTimeout(()=>setError(false),3000)
            return;
        }

        if(localStorage.getItem("basket")){
            const num=parseInt( localStorage.getItem("basket"))+1;
            localStorage.setItem("basket",num);
            let list= JSON.parse(localStorage.getItem("products")) ;
            let flag=false;
            let index=0;
            for(let obj in list){
                
                if(list[obj]._id===producto._id && list[obj].color===product.color 
                    && list[obj].size===product.size){
                    (list[obj].count)?(
                        list[obj]={
                            ...list[obj],
                            count:list[obj].count+1
                        }
                    ):(
                        list[obj]={
                            ...list[obj],
                            count:2
                        }
                    );
                    flag=true;
                }
                index++;
            }
            let fullProduct=producto;
            fullProduct={
                ...fullProduct,
                size:product.size,
                color:product.color
            }
            if(!flag){
                
                list={
                    ...list,
                    [index]:fullProduct
                }
                localStorage.setItem("products",JSON.stringify(list));
            }
            else{
            
                localStorage.setItem("products",JSON.stringify(list));

            }
        }
        else{
            let list={};
            let fullProduct=producto;
            fullProduct={
                ...fullProduct,
                size:product.size,
                color:product.color
            }
            list={
                0:fullProduct
            };
            localStorage.setItem("products",JSON.stringify(list));
            localStorage.setItem("basket",1);
        }
        let obj=JSON.parse(localStorage.getItem("products"));
        setSent(obj);
    }
    return(
        <Layout>
            <main>

            <div>
                <img src={url} alt={producto.name}/>
                <aside>

                <h2>{producto.name}</h2>
                <p className="category-element">{producto.category.name}</p>
                <p>{producto.description}</p>
                <span>
                    { sizes.map((el)=>(
                        <p key={el} id={el} onClick={()=>chooseSize(el)} className="block-size">{el}</p>
                    )) }
                </span>
                <span>
                    {
                        loadColors()
                    }
                </span>
                <h3>Precio al por mayor: ${producto.priceMayor}</h3>
                <h4>Precio al por menor: ${producto.priceMenor}</h4>
                {error && <p>Es necesario que ingrese el color y la talla</p> }
                <button onClick={agregarProducto} className="button-element">Agregar</button>
                </aside>
            </div>
            </main>
            <style jsx >{`
            .category-element{
                background-color:white;
                color:black;
                padding:0.5rem 1rem;
                text-transform:uppercase;
            }
            span{
                display:flex;
                flex-wrap:wrap;
                align-items:center;
            }
            .block-size{
                padding:1rem;
                text-transform:uppercase;
                margin:0.5rem;
                border: 1px solid white;
                transition: all 0.3s ease;
                cursor:pointer;
            }
            .block-size:hover{
                color:black;
                background-color:white;
            }
            .is-selected{
                color:black;
                background-color:white;
            }
            div{
                display:flex;
                padding: 1.5rem 0;
                flex-wrap:wrap;
                background-image: linear-gradient(216deg, rgba(77, 77, 77,0.05) 0%, rgba(77, 77, 77,0.05) 25%,rgba(42, 42, 42,0.05) 25%, rgba(42, 42, 42,0.05) 38%,rgba(223, 223, 223,0.05) 38%, rgba(223, 223, 223,0.05) 75%,rgba(36, 36, 36,0.05) 75%, rgba(36, 36, 36,0.05) 100%),linear-gradient(44deg, rgba(128, 128, 128,0.05) 0%, rgba(128, 128, 128,0.05) 34%,rgba(212, 212, 212,0.05) 34%, rgba(212, 212, 212,0.05) 57%,rgba(25, 25, 25,0.05) 57%, rgba(25, 25, 25,0.05) 89%,rgba(135, 135, 135,0.05) 89%, rgba(135, 135, 135,0.05) 100%),linear-gradient(241deg, rgba(55, 55, 55,0.05) 0%, rgba(55, 55, 55,0.05) 14%,rgba(209, 209, 209,0.05) 14%, rgba(209, 209, 209,0.05) 60%,rgba(245, 245, 245,0.05) 60%, rgba(245, 245, 245,0.05) 69%,rgba(164, 164, 164,0.05) 69%, rgba(164, 164, 164,0.05) 100%),linear-gradient(249deg, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 32%,rgba(148, 148, 148,0.05) 32%, rgba(148, 148, 148,0.05) 35%,rgba(202, 202, 202,0.05) 35%, rgba(202, 202, 202,0.05) 51%,rgba(181, 181, 181,0.05) 51%, rgba(181, 181, 181,0.05) 100%),linear-gradient(92deg, hsl(214,0%,11%),hsl(214,0%,11%));
                width:90%;
                justify-content:space-evenly;
                box-shadow:0 10px 12px rgba(0,0,0,0.2);
            }
            
            p{
                text-align:center;
            }
            h2,h4,p,h3{
                color:white;
            }
            h4{
                font-weight:500;
            }
            h2{
                text-transform:uppercase;
                letter-spacing:0.5rem;
                text-align:center;
            }
            main{
                padding:2rem 0;
                width:100%;
                display:flex;
                justify-content:center;
            }
            aside{
                display:flex;
                padding: 2rem;
                flex-direction:column;
                align-items:center;
                justify-content:space-evenly;
            }
            aside>*{
                margin:1rem;
            }
            .button-element{
                outline:0;
                border:0;
                padding:0.5rem 1rem;
                font-weight:400;
                font-size:1.5rem;
                font-family:"Montserrat";
                cursor:pointer;
                background-color:transparent;
                position:relative;
                color:rgba(255,255,255,0.8);
                transition: all 0.3s ease;
            }
            .button-element::after,.button-element::before{
                content:"";
                position:absolute;
                border:2px solid white;
                width:40%;
                height:50%;
                transition: all 0.3s ease;
            }
            .button-element::before{
                left:-0.25rem;
                border-color: white transparent transparent white;
                top:-0.25rem;
            }
            .button-element::after{
                right:-0.25rem;
                border-color: transparent white white transparent;
                bottom:-0.25rem;
            }
            .button-element:hover::before,
            .button-element:hover::after{
                width:100%;
                border-color:white;
                height:100%;
            }
            .button-element:hover{
                
                color:white;
                
            }
            img{
                width:40%;
                min-width:25rem;
                height:auto;
                border-radius:10px;
            }
            @media screen and (max-width:480px){
                img{
                    width:100%;
                    border-radius:10px 10px 0 0;
                    min-width:100%;
                }
                div{
                    padding-top:0;
                    border-radius: 10px 10px 0 0;
                }
            }
            `}</style>
        </Layout>
    )
}

export async function getServerSidePaths(){
    const url=`${API}/producto/products`;
    const res= await axios.get(url);
    const productos= await res.data;
    const paths=productos.map((el)=>{
        return {
            params:{id:el._id}
        }
    });
    return{
        paths,
        isFallback:true
    }
}

export async function getServerSideProps({params}){
    const url=`${API}/producto/${params.id}`;
    const res= await axios.get(url);
    const producto= await res.data;
    return {
        props:{
            producto
        }
    }
}