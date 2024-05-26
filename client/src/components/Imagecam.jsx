import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

function Imagecam({ setImage }) {
    const [imageSrc, setImageSrc] = useState('');
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
        setImage(imageSrc);
    }, [webcamRef, setImage]);

    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
    };

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                {imageSrc === '' ? (
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={imageSrc} alt="Captured" />
                )}
            </div>
            <div>
                {imageSrc !== '' ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setImageSrc('');
                            setImage(null);
                        }}
                        className="webcam-btn"
                    >
                        Retake Image
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        className="webcam-btn"
                    >
                        Capture
                    </button>
                )}
            </div>
        </div>
    );
}

export default Imagecam;
