import React,{useState} from 'react'
import axios from 'axios'
import{Link,useNavigate}from"react-router-dom"

const Create = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube",{
            name:name,
            email:email,
        })
        .then(()=>{
            history("/")
        });
    };
  return (
    <div>
        <section className='create-section'>
            <div className='container'>
                <div className='breadcrumb-section pt-4'>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Show Data</Link></li>
                    <li classname="breadcrumb-item active" aria-current="page"><i className="fa-solid fa-square-plus"></i> Create</li>
                </ol>
                </nav>
                </div>
                <div className='form-section pt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                    <div className="mb-3 row">
                        <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputText" class="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputText" class="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Create