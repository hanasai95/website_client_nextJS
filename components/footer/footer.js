import React from "react";
import { render } from "react-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
const footerStyle = {
    background: "#F8F8F8",
    fontSize: "20px",
    color: "white",
    textAlign: "center",
    padding: "20px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%"
};
const iconsGroupStyle = {
    display: 'flex',
    justifyContent: 'center',


};

const copyright = {
    display: 'flex',
    justifyContent: 'center',
};

const footerContent = {
    display: 'flex',
    marginTop: '100px',
    justifyContent: 'center',
    flexDirection: 'column',


};

const iconContainer = {
    margin: "15px",

};
const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

export default function Footer({ children }) {
    return (
        <div>
            <div style={footerContent}>
                <div style={iconsGroupStyle}>
                    <div style={iconContainer}>
                        <LinkedInIcon fontSize="large" />
                    </div>
                    <div style={iconContainer}>
                        <GithubIcon fontSize="large" />
                    </div>
                    <div style={iconContainer}>
                        <EmailIcon fontSize="large" />
                    </div>

                </div>

                <div style={copyright}>© Hana Cai 2021</div>
            </div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}