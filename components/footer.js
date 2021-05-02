import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
export default function Footer(){
    return(
        <footer>
            <p>© 2020 EMPRESA, Inc. All rights reserved.</p>
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
        transition:color 0.3s ease;
    }
    a:hover{
        color:#868686;
    }
    `
}
</style>
        </footer>
    )
}