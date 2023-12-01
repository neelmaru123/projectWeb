import { Link, useNavigate } from 'react-router-dom';
import './App.css';


function TopHeader() {
    // function mouseover() {
    //     let ans =  document.getElementById("TopHeader-btn");
    //     console.log(ans)
    //     document.getElementById("TopHeader-btn").style.backgroundColor = "#854f6c";
    // }

    // function mouseout() {
    //     document.getElementById("TopHeader-btn").style.backgroundColor = "#fbe4d8";
    // }

    const navigate = useNavigate()
    return (
        <>
            <nav class='navbar'>
                <div class="container bg-dark-purpal box-curve">
                    <div class=" float-start" href="#">
                        <img src="https://www.darshan.ac.in/Content/media/DU_Logo.svg" width="60" height="60" class="box-curve" 
                        />
                    </div>
                    <button className='btn btn-hover bg-light-purpal box-curve float-end' id="TopHeader-btn"
                        onClick={() => {
                            navigate('/project');
                        }}>
                        new++
                    </button>
                </div>
            </nav>

            {/* <nav class="navbar bg-body-tertiary bg-purpal">
                <div class="container-fluid bg-purpal">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}

            {/* <nav class="navbar bg-purpal box-curve">
                <div class="container bg-purpal">
                    <a class=" float-start" href="#">
                        <img src="https://www.darshan.ac.in/Content/media/DU_Logo.svg" width="30" height="24" />
                    </a>
                    <button class="btn btn-outline-success bg-light-purpal box-curve float-end" type="submit">Search</button>
                    <a class=" float-end" href="#">
                        <img src="https://www.darshan.ac.in/Content/media/DU_Logo.svg" width="30" height="24" />
                    </a>
                </div>
            </nav> */}

        </>
    )
}

export default TopHeader;