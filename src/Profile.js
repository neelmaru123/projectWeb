import { Link, useAsyncError, useNavigate, useParams } from 'react-router-dom';
import profile from "./profile_img.jpg"
import { useEffect, useState } from 'react';
import { ArrowLeftCircle  } from 'lucide-react';




function Profile() {
    const [data, setdata] = useState({});
    const [val, setval] = useState([]);
    const { id , UserName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://64e5909909e64530d17ead34.mockapi.io/Project/" + id)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setdata(res);
            })
    }, [])


    const printData = (project) => {
        console.log(data)
        // if (param.id == project.id) {
            return (
                <>
                    <div class="col-md-4 mb-3 mb-sm-0">
                        <div class="card bg-l box-curve border-light-purpal">
                            <div class="card-body">
                                <h5 class="card-title card-border">{project.ProjectTitle}</h5>
                                <p class="card-text card-border">{project.ProjectDescription + "..."}</p>
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
        // }
    }
    return ( 
        <>
        
            <div className="container">
                <ArrowLeftCircle  size={32} color='#522b5b' onClick={() => {
                    navigate('/')
                }}/>
                
                {/* <Link to='/' className='back-btn'>back</Link> */}
                {/* <img src='https://icons8.com/icon/26191/back-arrow' className='img-fluid'></img> */}

                <div className="border-bottom border-dark p-5 row">
                    <div className=" float-start col-md-4">
                        <img src={data.ProfilImage} className='img-fluid rounded'></img>
                    </div>

                    <div className="p-5 col-md-4">
                        <div>
                            <h4 >@{data.UserName}</h4>
                            {data.ProfileDescription}<br />

                            skills :
                            <ul>
                                <li>React</li>
                                <li>java</li>
                                <li>flutter</li>
                                <li>javascript</li>
                            </ul>
                            <br />
                        </div>
                        <div>
                            <h4>{data.UniversityName}</h4>
                            <h6>{data.Degree}</h6>
                            <h6>{data.TimePeriod}</h6>
                        </div>
                    </div>
                </div>
                <div className="profile-projects">
                    <h2>Projects :</h2>
                    <div className='container'>
                        <div className='row'>
                        <div class="col-md-4 mb-3 mb-sm-0">
                        <div class="card bg-l box-curve border-light-purpal">
                            <div class="card-body">
                                <h5 class="card-title card-border">{data.ProjectTitle}</h5>
                                <p class="card-text card-border">{data.ProjectDescription + "..."}</p>
                                <div className='float-start profile-img-div bg-dark-purpal box-curve' onClick={() => {
                                    navigate("/profile/" + data.id)
                                }}>
                                    <img src={data.ProfilImage} className='rounded float-start img-fluid'></img>
                                </div>
                                <i className='font-light-purpal'>{data.UserName}</i>
                                <a class="btn btn-hover bg-light-purpal box-curve float-end" id='more-btn' onClick={() => {
                                    navigate('/Project/' + data.id)
                                }} >more</a>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
