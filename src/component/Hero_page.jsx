import { useEffect, useState } from 'react';
import '../style/hero-page.css';
import { Degree_list } from '../Data/Data';
import videoBackground from '../assets/pexels_videos_2792370 (1080p)(1).mp4'; // Import your video file

const Hero_page = () => {
    const [Degree, setDegree] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDegree(prevDegree => (prevDegree + 1) % Degree_list.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
         
            <video autoPlay muted loop id="video-bg">
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-section flex justify-center items-end ">
                <div className="contant">
                    <span className="mobile:text-2xl font-extrabold font-color text-7xl text-white" style={{ fontSize: 'calc(50px + 1vw)' }}>
                        Navneet Sondarva
                    </span>
                    <p className="text-stone-400 uppercase font-thin text-2xl text-center   ">
                        i am a <span className=" text-green transition-opacity ">{Degree_list[Degree]}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Hero_page;
