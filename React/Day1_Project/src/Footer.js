import React from 'react'

class Footer extends React.Component{
render(){
const contact=(<div>
                <h5>Call Hours: 9am-9pm (Mon-Fri)</h5>
                <span><a href="https://">
                    <i className="fa fa-phone logo" aria-hidden="true">+2349153036869</i>
                </a></span>
                <span><a href="https://">
                   <i className="fa fa-envelope logo" aria-hidden="true"> abdullahioladejo1@gmail.com</i>
                 </a></span>
               </div>)

const footerLogo=( <p>
                    <a href="https://web.facebook.com/abdullahi.oladejo.10">
                    <i className="fa fa-facebook-square logo" aria-hidden="true"></i>
                    </a>
                    <a href="https://wa.me/"><i className="fa fa-whatsapp logo" aria-hidden="true"></i>
                    </a>
              <a href="https://twitter.com/oladejoabdulla7">
              <i className="fa fa-twitter logo" aria-hidden="true"></i>
              </a>
                    <a href="https://www.instagram.com/maxwizardth/">
                    <i className="fa fa-instagram logo" aria-hidden="true"></i>
                    </a>
              <a href="https://linkedIn.com/"><i className="fa fa-linkedin-square logo" aria-hidden="true">
              </i>
              </a>
             <a href="https://github.com/maxwizardth">
             <i className="fa fa-github logo" aria-hidden="true"></i>
             </a><br/>
           <span id="copy">
              <small>Copyright© all reserved by Maxwizard</small>
            </span>
                  </p>)

        return (<footer style={{textAlign:'center',
        						color:'white',
        						background:'#0588b0',
        						padding:'5px'}}>
                <h2>Connect with Us<hr/></h2>
               {contact}
               {footerLogo}
              </footer>)}
          }

export default Footer
