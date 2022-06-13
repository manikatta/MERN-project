import { useState } from 'react';
import {NavLink} from 'react-router-dom'


const Register = () => {
   
     const[inpVal,setINP]=useState({
         name:"",
         email:"",
         mobile:"",
         age:"",
         work:"",
         address:"",
         desc:"",
})


     const setdata=(e)=>{
         console.log(e.target.value);
         const {name,value}=e.target;
         setINP=((preval)=>{
             return{
                 ...preval,
                 [name]:value
             }
         })
     }

     const addinpdata = async(e)=>{
           e.preventDefault();
           const {name,email,age,mobile,work,address,desc} = inpVal

         const res = await fetch("/register", {
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body:JSON.stringify({
            name,email,age,mobile,work,address,desc
           })
         });

         const data = await res.json();
         console.log(data);

         if (res.status===404 || !data) {
            alert("error");
            console.log("error");

         }else{
           alert("data added");
           console.log("data added");
         }
     }



    return ( 
        <div className="container">
            <a href="/">home</a>
            <form className='mt-4'>
                <div className="row">
  <div class="mb-3 col-lg-6 col-md-6 col-12" >
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name='name' value={inpVal.name} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" name='email' value={inpVal.email} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Mobile</label>
    <input type="number" name='mobile' value={inpVal.mobile} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">age</label>
    <input type="number" name='age' value={inpVal.age} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">work</label>
    <input type="text" name='work' value={inpVal.work}onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" name='add' value={inpVal.address} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-12 col-md-12 col-12">
    <label for="exampleInputPassword1" class="form-label">Description</label>
   <textarea name="desc" value={inpVal.desc}  onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={addinpdata} >Submit</button>
  </div>
</form>


        </div>
     );
}
 
export default Register;