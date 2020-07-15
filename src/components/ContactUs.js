import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer'
function ContactUs(){

  return(
    <div>





     <div className="section">
       <div className="row">
           <div className="col s12 l5 mask">
             <h3 className="center-align grey-text">Get In Touch</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo eos, iure dolorem voluptate, cupiditate laudantium repellendus, omnis possimus quis temporibus sequi at voluptas nam error officiis debitis quasi. Rerum!</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aliquid ducimus officia laborum earum, totam dolore consequuntur facilis a ea illum perspiciatis rem, autem eligendi eaque sequi doloribus pariatur, quaerat.</p>

           </div>


           <form className="col s12 l6 myform">
             <div className="row">
               <div className="input-field col l12">
                 <i className="material-icons prefix grey-text">account_circle</i>
                 <input id="icon_prefix" type="text" className="validate" />
                 <label for="icon_prefix">Your Names</label>
               </div>

               <div className="input-field col l12">
                 <i className="material-icons prefix grey-text">email</i>
                 <input id="email" type="text" className="validate" />
                 <label for="email">Your Email</label>
               </div>
               <div className="input-field col l12">
                 <i className="material-icons prefix grey-text">phone</i>
                 <input id="icon_telephone" type="tel" className="validate" />
                 <label for="icon_telephone">Your PhoneNumber</label>
               </div>
               <div className="input-field col l12">
                 <i className="material-icons prefix grey-text">message</i>
                 <textarea id="mytextarea" cols="30" rows="10" className="materialize-textarea"></textarea>
                 <label for="mytextarea">Your Message</label>
               </div>
             </div>
             <div className="input-field center">
               <button className="btn right grey">Submit</button>
             </div>
           </form>
         </div>

     </div>
   <Footer/>
    </div>
  )
}
export default ContactUs
