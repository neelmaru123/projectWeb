import { Link, useNavigate } from "react-router-dom";
import './App.css';
import { useState } from "react";
import { ArrowLeftCircle } from "lucide-react";

function Newproject() {
    const [data, setdata] = new useState({ UserName: "" });
    const navigate = useNavigate();
    return (
        <>
            <script async src="https://imgbb.com/upload.js"></script>
            <div class="ps-5 pe-5 " >
                {/* <Link to="/" className="back-btn">Back</Link> */}
                <ArrowLeftCircle size={32} color='#522b5b' onClick={() => {
                    navigate('/')
                }} />
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="inputEmail4" onChange={(e) => {
                            setdata({ ...data, UserName: e.target.value });
                        }} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">collage/university Name</label>
                        <input type="text" class="form-control" id="inputEmail4" onChange={(e) => {
                            setdata({ ...data, UniversityName: e.target.value });
                        }} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">Degree</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="ex. B.Tech Computer Science" onChange={(e) => {
                            setdata({ ...data, UserName: e.target.value });
                        }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Profile description</label>
                        <input type="text" class="form-control" id="inputPassword4" onChange={(e) => {
                            setdata({ ...data, ProfileDescription: e.target.value });
                        }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Time period</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="ex. 2022-2026" onChange={(e) => {
                            setdata({ ...data, TimePeriod: e.target.value });
                        }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">profile image</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Write Https path of image" onChange={(e) => {
                            setdata({ ...data, ProfileImage: e.target.value });
                        }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Project Title</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="ex. Flutter app " onChange={(e) => {
                            setdata({ ...data, ProjectTitle: e.target.value });
                        }} />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Project Description</label>
                        <textarea type="text" class="form-control" id="inputAddress" placeholder="Project description" onChange={(e) => {
                            setdata({ ...data, ProjectDescription: e.target.value });
                        }} />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn project-apply" onClick={() => {
                            fetch("https://64e5909909e64530d17ead34.mockapi.io/Project", {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                            })
                                .then((res) => {
                                    navigate('/');
                                })
                        }}>submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Newproject;