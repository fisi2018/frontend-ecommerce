import Layout from "../components/layout";
import axios from "axios";
import {API} from "../components/config";
export default function Contact({users}){
    return(
        <Layout>
            <h1>Sección de contactos</h1>
            <p className="sumary">Ponte en contacto con cualquiera de nuestros colaboradores</p>
            <div className="container-users">
                {users.map((user)=>(
                    <div key={user._id} className={(user.role===1)?`admin`:`worker`} >
                        <p>Nombre: {user.name}</p>
                        <p>Correo: {user.username}</p>
                        <p>Celular: {(user.phone)?(user.phone):`No disponible`}</p>
                        <p>Rango: {(user.role===1)?`Gerente`:`Colaborador`} </p>
                        <p>Facebook: {(user.facebook)? <a target="_blank" href={user.facebook}>Aqui</a> :`No disponible`}</p>
                    </div>
                ))}
            </div>
            <style jsx >{`
            .container-users{
                width:100%;
                display:flex;
                flex-wrap:wrap;
                padding:2rem;
            }
            
            h1,.sumary{
                text-align:center;
                padding:1rem 0;
            }

            h1{
                font-weight:400;
                font-size:2.5rem;

            }
            .worker,.admin{
                display:flex;
                margin:1rem;
                padding:0.5rem;
                flex-direction:column;
                box-shadow:0 2px 2px rgba(0,0,0,0.2);
                width:25rem;
                border-radius:10px;
            }
            .worker{
                background-color:#4C4C4C;
            }
            .worker>p,.admin>p{
                padding:1rem;
                color:white;
            }
            a{
                color:white;
                font-family:"Montserrat";
            }
            .admin{
                background-color:#014A6F;
            }
            `}</style>
        </Layout>
    )
}
export async function getServerSideProps(){
    const url=`${API}/user/users`;
    try{
        const res= await axios.get(url);
        const users=await res.data;
        if(users.error){

        }
        else{
            return {
                props:{
                    users
                }
            }
        }
    }catch(err){

    }
}