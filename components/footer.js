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
    @media screen and (max-width:640px){
        a:after{
            transform:translateY(0) translateX(0);
        }
        footer{
            flex-direction:column;
            justify-content:unset;
            padding:0;
            height:7rem;
        }
        a:hover:after{
        opacity:1;
        transform:translateY(-100%) translateX(0);
    }
        nav{
            width:100%;
            padding:0;
            flex:2;
            justify-content:unset;
        }
        p{
            flex:1;
            text-align:center;
            padding:0.5rem 0.5rem 0 0.5rem;
        }
        a{
            flex:1;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        a:nth-child(1):hover{
            background-color:#1A73EA;
        }
        a:nth-child(2):hover{
            background-color:#00B0E9;
        }
        a:nth-child(3):hover{
            background:linear-gradient(0deg, #F6CC71, #DC0E89,#5A50A1);
        }
    }
    `
}
</style>
        </footer>
    )
}