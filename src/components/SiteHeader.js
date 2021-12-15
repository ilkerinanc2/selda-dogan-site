import React, {Component} from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export class SiteHeader extends Component{
    render(){
        return(
            <div className='row' style={{position:'fixed'}} id="header2" align="right" >
            <a href="tel:(0212) 892 01 03" ><PhoneIcon style={{color:"#5D6D7E"}}></PhoneIcon></a>
            <a href="mailto:seldadogan4@hotmail.com"><EmailIcon style={{color:"#5D6D7E"}}></EmailIcon></a>
            <a href="https://www.instagram.com/dt.seldadogan"><InstagramIcon style={{color:"#5D6D7E"}}></InstagramIcon></a>
        </div>
        )
    }
}
