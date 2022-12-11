import axios from 'axios'
import React,{useState,useEffect} from 'react'
import{Link}from"react-router-dom";

const Read = () => {
    const[data,setData]=useState([]);
    function getData(){
        axios.get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
        .then((res)=>{
            setData(res.data);
        });
    };
    function handleDelete(id){
        axios.delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
        .then(()=>{
            getData();
        });
    };
    
    const setToLocalStorage=(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    };
    useEffect(() => {
      getData();
    }, []);
    

  return (
    <div>
        <section className='read-section'>
            <div className='container'>
            <div className='breadcrumb-section pt-4'>
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li className="breadcrumb-item">Show Data</li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/create"><i className="fa-solid fa-square-plus"></i> Create</Link></li>
                </ol>
                </nav>
                </div>
                <div className='table-data pt-5 '>
                <div className='row'>
                    <div className='col-md-7'>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {data.map((eachData)=>{
                        return(
                            <>
                             <tbody>
                        <tr>
                        <th scope="row">{eachData.id}</th>
                        <td>{eachData.name}</td>
                        <td>{eachData.email}</td>
                        <td><Link to="/update"><i class="fa-solid fa-pen-to-square" onClick={()=>
                        setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                        )}>{''}</i></Link></td>
                        <td><i class="fa-solid fa-trash" onClick={()=>handleDelete(eachData.id)}></i></td>
                        </tr>
                        </tbody>

                            
                            </>
                        )
                    })}
                    </table>
 
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Read