import axios from 'axios'
import React,{useState,useEffect} from 'react'
import{Link,useNavigate}from 'react-router-dom'

const Update = () => {
    const[id,setId]=useState(0);
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const navigate=useNavigate();
    
    useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    }, []);

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`,{
            name:name,
            email:email,
        })
        .then(()=>{
            navigate("/");
        });
    };

  return (
    <div>
       <section className='create-section'>
            <div className='container'>
            <div className='breadcrumb-section pt-4'>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Back</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><i className="fa-solid fa-pen-to-square"></i> Update</li>
                </ol>
                </nav>
                </div>
                <div className='form-section pt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                    <div class="mb-3 row">
                        <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputText" class="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputText" class="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
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

export default Update