import { useState } from 'react';
import {NavLink} from 'react-router-dom'




const Edit = () => {
    
    const[inVal,setINP]=useState({
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






    return (
        <div className="container">
            <a href="/">home2</a>
            <form className='mt-4'>
                <div className="row">
  <div class="mb-3 col-lg-6 col-md-6 col-12" >
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name='name' value={inVal.name} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" name='email' value={inVal.email} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Mobile</label>
    <input type="number" name='mobile' value={inVal.mobile} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">age</label>
    <input type="number" name='age' value={inVal.age} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">work</label>
    <input type="text" name='work' value={inVal.work}onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" name='add' value={inVal.address} onChange={setdata} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-12 col-md-12 col-12">
    <label for="exampleInputPassword1" class="form-label">Description</label>
   <textarea name="desc" value={inVal.desc}  onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>


        </div>
      );
}
 
export default Edit;