import { ArrowLeftCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"


function Projectbyid() {
    const { id } = useParams();
    const [data, setdata] = useState({});
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


    return (
        <>
            <div className="project-div conrainer ps-5 pe-5">
                <ArrowLeftCircle size={32} color='#522b5b' onClick={() => {
                    navigate('/')
                }} />
                {/* <Link to="/" className="back-btn">Back</Link> */}
                <div className="project-title row-md">
                    <h1>{data.ProjectTitle}</h1>
                </div>

                <div className="project-body row-md">
                    Description:
                    <br />
                    <br />
                    <p>
                        {data.ProjectDescription}
                    </p>
                </div>
                <button className="project-apply">Apply</button>
            </div>
        </>
    )
}

export default Projectbyid;