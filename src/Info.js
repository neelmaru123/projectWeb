import './App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Info() {
    const [data, setdata] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch("https://64e5909909e64530d17ead34.mockapi.io/Project")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setdata(res);
            })
    }, [])
    
    const printData = data.map((project) => {
        return (
            <>
                <div class="col-md-4 mb-3 mb-sm-0">
                    <div class="card bg-l box-curve border-light-purpal">
                        <div class="card-body">
                            <h5 class="card-title card-border">{project.ProjectTitle}</h5>
                            <p class="card-text card-border">{project.ProjectDescription.substring(0, 300) + "..."}</p>
                            <div className='float-start profile-img-div bg-dark-purpal box-curve' onClick={() => {
                                navigate("/profile/" + project.id)
                            }}>
                                <img src={project.ProfilImage} className='rounded float-start img-fluid'></img>
                            </div>
                            <i className='font-light-purpal'>{project.UserName}</i>
                            <a class="btn btn-hover bg-light-purpal box-curve float-end" id='more-btn' onClick={() => {
                                navigate('/Project/' + project.id)
                            }} >more</a>
                        </div>
                    </div>
                </div>
            </>
        )
    });
    
    return (
        <>
            <div className="container body">
                <div className="row gy-3 gx-5">
                    {printData}
                </div>
            </div>

        </>
    )
}

export default Info