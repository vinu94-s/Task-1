import React from 'react';
import './App.css';
function App(){
  return(
    <section className="card">
    <div className='container'>
    <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
         <hr></hr>
       </div>
       <div className ="text-body">
         <ul className="fa-ul">
      <li>Single User</li> 
      
       <li>5GB Storage</li>

      <li>Unlimited Public Projects</li>

       <li>Community Access</li>

        <li>Unlimited Private Projects</li>

        <li>Dedicated Phone Support</li>

        <li>Free Subdomain</li>

        <li>Monthly Status Reports</li>
         </ul>

         </div> 
         <div className='btn'>
           <button>Button</button>
         </div>
    </div>
    <div className='container'>
    <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
         <hr></hr>
       </div>
       <div className ="text-body">
         <ul>
      <li>5 Users</li> 
      
       <li>50GB Storage</li>

      <li>Unlimited Public Projects</li>

       <li>Community Access</li>

        <li>Unlimited Private Projects</li>

        <li>Dedicated Phone Support</li>

        <li>Free Subdomain</li>

        <li>Monthly Status Reports</li>
         </ul>

         </div> 
         <div className='btn'>
           <button>Button</button>
         </div>
    </div>
    <div className='container'>
    <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
         <hr></hr>
       </div>
       <div className ="text-body">
         <ul className="fa-ul">
      <li>Unlimited User</li> 
      
       <li>150GB Storage</li>

      <li>Unlimited Public Projects</li>

       <li>Community Access</li>

        <li>Unlimited Private Projects</li>

        <li>Dedicated Phone Support</li>

        <li>Unlimited Free Subdomain</li>

        <li>Monthly Status Reports</li>
         </ul>

         </div> 
         <div className='btn'>
           <button>Button</button>
         </div>
    </div>
   
    
    </section>
  );
}
export default App;