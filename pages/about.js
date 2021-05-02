import Layout from "../components/layout";

export default function About(){
    return(
        <Layout>
            <h1 >Acerca de nosotros</h1>
            <section>
                <div className="mision">
                    <h2>Nuestra misión</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, voluptatem quae! Natus tempore praesentium corporis rerum qui, placeat, sint nisi harum repellat ipsam distinctio unde odit tempora similique non dicta.

                    </p>
                </div>
                <div className="vision" >
                    <h2>Nuestra visión</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eveniet nobis quam provident pariatur veniam quae amet ullam perspiciatis natus vero expedita adipisci, laborum fugiat! Blanditiis quod labore molestias dignissimos.</p>
                </div>
                <div className="valores">
                    <h2>Nuestros valores</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eligendi sunt fugiat aspernatur nulla. Exercitationem, animi ipsam. Deserunt assumenda provident veniam in voluptatibus tempore laborum mollitia possimus placeat incidunt. Eius.</p>
                </div>
            </section>
            <style jsx>
            {
                `
                .valores{
                    background-color:#B1B1B1;
                }
                .valores>h2{
                    color:#014A6F;
                }
                .valores>h2::after{
                    background-color:#014A6F;
                }
                .valores>p{
                    color:white;
                }
                .vision{
                    background-color:#4C4C4C;
                }
                .vision>*{
                    color:white;
                }
                .mision{
                    background-color:#014A6F;
                }
                .mision>*{
                    color:white;
                }
                .mision>h2::after,
                .vision>h2::after{
                    background-color:white;
                }
                h1{
                    font-weight:400;
                    text-align:center;
                    font-size:2.5rem;
                    padding:1rem;
                }
                p,h2{
                    text-align:center;
                }
                p{
                    padding:0.5rem;
                }
                h2{
                    font-weight:400;
                    position:relative;
                    padding:0.25rem;
                }
                h2::after{
                    content:"";
                    width:25%;
                    height:2px;
                    position:absolute;
                    background-color:black;
                    left:37.5%;
                    bottom:0;

                }
                section{
                    width:100%;
                    display:flex;
                    padding:2rem 0;
                    justify-content:space-evenly;
                    flex-wrap:wrap;
                }
                div{
                    width:25rem;
                    box-shadow: 0 8px 8px rgba(0,0,0,0.2);
                    padding:1rem;
                    margin:1rem 0;
                    border-radius:10px;
                }
                `
            }
            </style>
        </Layout>
    )
}