import { useState, useMemo } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { socialIcons, links } from '../Additional';
import '../style/Sidebar.css';
import myImage from '../assets/—Pngtree—vector fox_585540.png';

const Sidebar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    const handleChange = () => {
        setIsLoading(prevState => !prevState);
    };

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const renderLinks = useMemo(() => {
        return links.map((link, index) => (
            <li className="list-item py-3 bg-slate-400" key={index}>
                <Link to={link.to} className="nav-link">
                    <div className="flex items-center justify-evenly">
                        <div
                            className={`icon-link text-2xl flex relative justify-start ${link.text === 'Blog' ? 'pl-2' : 'pl-0'}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave} 
                        >
                            {link.icon}
                            {!isLoading && hoveredIndex === index && (
                                <span className="">{link.text}</span>
                            )}
                        </div>
                        {isLoading && (
                            <div className="link-text">
                                <span
                                    className={`w-20 flex justify-end ${link.text === 'Blog' ? 'pr-2' : 'pr-0'} link-span`}
                                >
                                    {link.text}
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
            </li>
        ));
    }, [isLoading, hoveredIndex]);

    return (
        <div className={`bg-transparent ${isLoading ? 'w-64' : 'w-20'} transition-all ease-linear duration-300 relative z-0`} style={{ height: '100vh' }}>
            <div className="side-arrow">
                <HiOutlineMenuAlt3
                    onClick={handleChange}
                    className="text-4x1 hover:text-green-800 duration-100 transition-all"
                />
            </div>
            <div className="main-contant">
                <div className="logo" style={{ opacity: isLoading ? '1' : '0' }}>
                    <img src={myImage} alt="" />
                </div>
                <div className="links pt-10">
                    <ul className={isLoading ? 'p-0' : 'p-2'}>{renderLinks}</ul>
                </div>
            </div>
            <div className="social-icon mobile:hidden " style={{ flexDirection: isLoading ? 'row' : 'column' }}>
                {socialIcons.map((socialIcon, index) => (
                    <div key={index} className="icon mx-auto w-[80%]">
                        <Link to={socialIcon.link} className="text-white hover:text-red-600 transition-colors">
                            {socialIcon.icon}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
