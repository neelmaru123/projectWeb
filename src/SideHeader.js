import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import user from './user.png'



function SideHeader() {
    const navigate = useNavigate();
    return (
        <>
            <div className="SideHeader col-sm">
                
                {/* <image src={user} className='image-fluid' path='/profile'></image>
                <Link to='/profile' className='profile-btn'>

                </Link> */}

                <div className='profile-btn' onClick={function (){
                    navigate('/profile')
                }}>
                    <image src="https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg" className='image-fluid'></image>
                </div>

            </div>
        </>
    )
}

export default SideHeader;