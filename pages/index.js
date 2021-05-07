import Layout from "../components/layout";
import Card from "../components/card";
import {API} from "../components/config";

const axios=require("axios");
export default function Home({tables,error}){
    return(
        <Layout>
            
            <h1>Publicaciones</h1>
            <p>Descubre las últimas novedades y ofertas en nuestras tiendas</p>
            <section>
            {
                (error)?<p>Ha ocurrido un error</p>:
                tables.map((table)=>{
                    return(
                        <Card key={table._id} title={table.title} description={table.description}
                        category={table.category} img={`${API}/table/img/${table._id}`} />

                    )
                })
            }
            
            </section>
            <style jsx>
                {`
                h1,p{
                    text-align:center;
                    padding:1rem 0;
                    
                }
                
                h1{
                    font-weight:400;
                    font-size:2.5rem;
                }

                section{
                    display:flex;
                    flex-wrap:wrap;
                  
                    margin:auto;
                    width:100%;
                    justify-content:space-evenly;
                    align-items:left;
                }
                
                `}
            </style >
        </Layout>
    );
}
export async function getServerSideProps(){
    const url=`${API}/table/tables`;
    try{
        const res= await axios.get(url);
        const tables= await res.data;
        if(tables.error){
            return {
                props:{
                    error:tables.error
                }
            }
        }else{

            return {
                props:{
                    tables
                }
        }
        }
    }catch(err){
        return {
            props:{
                error:`Ha ocurrido un error ${err}`
            }
        }
    }
}