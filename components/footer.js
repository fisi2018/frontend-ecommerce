import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
export default function Footer(){
    return(
        <footer>
            <p>© 2021 Importadora A&F. All rights reserved.</p>
            <nav>

            <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon/>
            </a>
            <a href="https://www.twitter.com" target="_blank">
                <TwitterIcon/>
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <InstagramIcon/>
            </a>
            </nav>

<style jsx>
{
    `
    footer{
        background-color:black;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding:1.5rem;
    }
    p{
        color:white;
    }
    nav{
        display:flex;
        flex-direction:row;
        width:15rem;
        justify-content:space-evenly;
    }
    a{
        color:white;
        transition:all 0.3s ease;
    }
    a:hover{
        color:#868686;
    }
    a:nth-child(1){
        position:relative;
    }
    a:after{
        transform:translateY(0) translateX(-65%);
        opacity:0;
        font-family:"Montserrat";
        position:absolute;
        transition:all 0.3s ease;
    }
    a:nth-child(1):after{   
        content:"Facebook";
    }
    a:hover:after{
        opacity:1;
        transform:translateY(100%) translateX(-65%);
    }
    a:nth-child(2):after{
        content:"Twitter";
    }
    a:nth-child(3):after{
        content:"Instagram";
    }
    `
}
</style>
        </footer>
    )
}