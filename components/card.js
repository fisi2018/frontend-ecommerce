export default function Card(props){
    return(
        <div className="container">
            <img src={props.img} alt={props.title}/>
            <div className="h3-block">
            <h3>{props.category}</h3>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <style jsx>
                {`
                .h3-block{
                    
                    display:flex;
                }
                h2{
                    text-transform:uppercase;
                }
                h3{
                    font-size:1rem;
                    font-weight:500;
                    text-transform:uppercase;
                    letter-spacing:0.25rem;
                    background-color:red;
                    color:white;
                    padding:0 0.5rem;
                    
                    text-align:center;
                }
                img{
                    width:100%;
                    height:20rem;
                }
                .container{
                    border-radius:8px;
                    cursor:pointer;
                    background-color:white;
                    margin: 1rem auto;
                    width:20rem;
                    height:35rem;
                    padding:1rem;
                    display:flex;
                    box-shadow:0 2px 2px rgba(0,0,0,0.2);
                    flex-direction:column;
                    justify-content:space-evenly;
                    transition: all 0.3s ease;
                }
                .container:hover{
                    transform: translateY(-1.5rem);
                    box-shadow: 0 12px 14px rgba(0,0,0,0.2);
                }
                
                `}
            </style>
        </div>

    )
}