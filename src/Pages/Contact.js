



// import React from 'react';
// import '../App.css';
// import emailjs from 'emailjs-com';

// const Contact = () => {

//       function sendEmail(e){

//             e.preventDefault();
    
//             emailjs.sendForm('service_8i9oycr', 'template_egrpddf', e.target, 'user_lhHJ8CQU2Aii1SNDjHIOr')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//             e.target.reset();
//       }


//   return (

//       <div className='container' >

//             <div className='contactWrapper'>

           
//                   <h1>Contact Us</h1>
//                   <div style={{ borderTop: "0.1px solid #869ba9", marginLeft: 3, marginRight: 3 }}></div>

//                   <form className="contactForm" onSubmit={sendEmail}>
                        
//                         <div className="formSec1">
                            
//                               <input  placeholder="Name" type="text" name="name" className="form-control"/>

//                               <input type="email" placeholder="Email" name="user_email" className="form-control"/>   
//                         </div>

//                         <label>Message:</label>
//                         <textarea name="message" rows="4" className="form-control"/>

//                         <input type="submit" value="send" className="contactBtn" />
                  
//                   </form>

//                   <h2>his needs to stop</h2>

//             </div>

//       </div>
//   );


// };

// export default Contact;

