import React from "react";
import "./footer.css"

const Footer =()=>{
    return(
        <div>
        <div class="footer">
            <div class = "container">
                <div class="row">
                <div class = "footer-col">
                    <h4 class="h4">COMPANY INFO</h4>
                    <p class="para">
                    We are one of the world leading 
                companies in manufacturing pharmaceutical 
                standards, including stable-isotope 
                labeled internal standards, metabolites, 
                degradation compounds / impurities, and 
                inhibitor reference compounds.
                    </p>
                    <a href="About Us"> 
                    <p class = "black-button">Read More</p>
                </a>  
                </div>
                <div class = "footer-col">
                    <h4 class="h4">CONTACT US</h4>
                    <p class="subtitle">India : 
                    <a href="" class = "link">+91-8849247288</a></p>
                    <p class="subtitle">Email :
                    <a href=""  class = "link">sales@artisbiotech.com</a> </p>
                </div>
                <div class = "footer-col">
                    <h4 class="h4">INFORMATION</h4>
                    <a href="Products.js"  class="black-button1">Products</a> 
                    <a href="Custom-Synthesis.js"  class="black-button1">Custom-Synthesis</a><br></br>
                    <a href="Custom-Analysis.js"  class="black-button1">Custom-Analysis</a>
                    <a href="Contact-Us.js"  class="black-button1">Contact-Us</a><br></br>
                </div>
                </div>
                <hr class = "hr"></hr><br></br>
                </div> 
                <p class="copyright">Copyright © 2022 <bold class="bold">Artis Biotech</bold> All Rights Reserved</p>
                </div>
                </div>
    )
}

export default Footer;
