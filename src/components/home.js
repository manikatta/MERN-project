import '../App.css'
import React from 'react'
import {AiOutlineEye} from 'react-icons/ai' 
import {BsPencilSquare} from 'react-icons/bs'
import {MdDeleteOutline} from 'react-icons/md'


const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary"><a className='hm' href="/register">Add Data</a></button>
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Meet</td>
                            <td>meet@gmail.com</td>
                            <td>web developer</td>
                            <td>9480750499</td>
                            <td className='d-flex justify-content-between'>
                                <button id='eye' className='btn btn-success'><AiOutlineEye size='1.5rem'/></button>
                                <button id='edit' className='btn btn-primary'><BsPencilSquare size='1.5rem'/></button>
                                <button id='del' className='btn btn-danger'><MdDeleteOutline size='1.5rem'/></button>
                            </td>
                        </tr>  
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Meet</td>
                            <td>meet@gmail.com</td>
                            <td>web developer</td>
                            <td>9480750499</td>
                            <td className='d-flex justify-content-between'>
                                <button id='eye' className='btn btn-success'><AiOutlineEye size='1.5rem'/></button>
                                <button id='edit' className='btn btn-primary'><BsPencilSquare size='1.5rem'/></button>
                                <button id='del' className='btn btn-danger'><MdDeleteOutline size='1.5rem'/></button>
                            </td>
                        </tr>  
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Meet</td>
                            <td>meet@gmail.com</td>
                            <td>web developer</td>
                            <td>9480750499</td>
                            <td className='d-flex justify-content-between'>
                                <button id='eye' className='btn btn-success'><AiOutlineEye size='1.5rem'/></button>
                                <button id='edit' className='btn btn-primary'><BsPencilSquare size='1.5rem'/></button>
                                <button id='del' className='btn btn-danger'><MdDeleteOutline size='1.5rem'/></button>
                            </td>
                        </tr>  
                    </tbody>
                </table>






            </div>
        </div>
    );
}

export default Home;