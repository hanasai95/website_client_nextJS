import React, { Fragment } from "react";
import Footer from '../components/footer/footer';
import NavBar from '../components/Home/NavBar';
import ProjectComponent from "../components/Project";

export default function Project() {
    return <Fragment>
        <NavBar />
        <ProjectComponent />
        <Footer />


    </Fragment>;
}