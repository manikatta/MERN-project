import '../App.css'
import profile from '../images/profile.png'
import{MdEmail} from 'react-icons/md'
import{MdWork} from 'react-icons/md'
import {ImMobile2} from 'react-icons/im'
import{ImLocation} from 'react-icons/im'
import {BsPencilSquare} from 'react-icons/bs'
import {MdDeleteOutline} from 'react-icons/md'



const Details = () => {
    return ( 
        <div className="container mt-3">
           <h1 style={{ fontWeight:'400' }}>Welcome Katta Manish</h1>
            
               <div className="details">
               
                   <div className="row">
                   <div className="add_btn ">
                       <button id='edit' className='btn btn-primary mx-2'><BsPencilSquare size='1.5rem'/></button>
                                <button id='del' className='btn btn-danger'><MdDeleteOutline size='1.5rem'/></button>
                       </div>

                   <div className="left_view col-lg-6 col-md-6 col-12">
                   <img src={profile} style={{width:50}} alt="" />
                    <h3 className='mt-3'>Name: <span>Katta Manish</span></h3>
                    <h3 className='mt-3'>Age: <span>24</span></h3>
                    <p className='mt-3'><MdEmail size='2rem'/>Email: <span>manishkatta.399@gmail.com</span></p>
                    <p className='mt-3'><MdWork size='2rem'/>Occupation: <span>Web Developer</span></p>
                   </div>

                   <div className="right_view col-lg-6 col-md-6 col-12">
                       
                   <p className='mt-5'><ImMobile2 size='2rem'/>Mobile: <span>+91 9480750499</span></p>
                   <p className='mt-3'><ImLocation size='2rem'/>Location: <span>Bangalore</span></p>
                   <p className='mt-3'>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span></p>

                   </div>
                   </div>
                   
                    



               </div>


        </div>
     );
}
 
export default Details;