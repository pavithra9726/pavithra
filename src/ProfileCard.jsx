import React from "react";
import reactLogo from "./assets/react.svg";


const ProfileCard = ({ profile }) => {
    return (
        <div
            style={{
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "green", 
                width: "90%",
                maxWidth: "350px",
                textAlign: "center",
                display: "flex",        
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center"     
            }}
        >
            <img
                style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    backgroundColor: "violet",
                    display: "block",
                    margin: "0 auto 20px"
                }}
                src={reactLogo}
            />
            <div>
                <div style={{ marginBottom: "10px" }}>
                    <span>Name:</span>
                    <span>{profile.name}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span>Department:</span> 
                    <span>{profile.department}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span>Year:</span>
                     <span>{profile.year}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span>Mobile:</span>
                    <span>{profile.mobile}</span>
                </div>
            </div>
          
        </div>
    );
};

export default ProfileCard;