import React, { useState } from "react";
import Imagecam from "./Imagecam.jsx";
import "../styles/Capture.css";
import axios from "axios";

function Capture() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();
        if (!image) {
            alert("Please capture an image before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', dataURLtoFile(image, 'capture.jpg')); 

        try {
            const res = await axios.post("https://retinoscan-2.onrender.com/upload/capture", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Upload successful:", res.data);
            alert("Form submitted successfully!");
            setName('');
            setEmail('');
            setImage(null);
        } catch (err) {
            console.error("Error uploading file:", err);
            alert("Failed to upload file.");
        }
    };

    const dataURLtoFile = (dataurl, filename) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };

    return (
        <div className="cam-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form and capture image</h1>
                    <form className="form" onSubmit={submitForm}>
                        <Imagecam setImage={setImage} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button type="submit" id="login-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Capture;
