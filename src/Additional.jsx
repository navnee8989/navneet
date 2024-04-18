import {
	FaDesktop,
	FaMusic,
	FaBullhorn,
	FaGamepad,
	FaChartBar,
	FaServer,
	FaLinkedin,
} from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';

import { IoSettingsSharp } from 'react-icons/io5';
import {
	FaUser,
	FaEye,
	FaWhatsapp,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaBehance,
	FaDribbble,
} from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';
// Additional.js

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { SiJquery, SiRedux } from 'react-icons/si';
import { BiLogoTailwindCss } from 'react-icons/bi';

export const LanguageSkillsData = [
	{
		name: 'HTML 5',
		icon: <IoLogoHtml5 />,
		percentage: 85,
		color: 'primary',
	},
	{
		name: 'CSS 3',
		icon: <IoLogoCss3 />,
		percentage: 70,
		color: 'danger',
	},
	{
		name: 'JavaScript',
		icon: <IoLogoJavascript />,
		percentage: 70,
		color: 'success',
	},
	{
		name: 'Bootstrap',
		icon: <FaBootstrap />,
		percentage: 80,
		color: 'warning',
	},
	{
		name: 'jQuery',
		icon: <SiJquery />,
		percentage: 50,
		color: 'secondary',
	},
	{
		name: 'Tailwind CSS',
		icon: <BiLogoTailwindCss />,
		percentage: 90,
		color: 'info',
	},
	{
		name: 'React JS',
		icon: <FaReact />,
		percentage: 70,
		color: 'success',
	},
	{
		name: 'Redux',
		icon: <SiRedux />,
		percentage: 90,
		color: 'purple',
	},
];

export const CardData = [
	{
		icon: <FaDesktop />,
		name: 'Web Development',
		text: 'Modern and mobile-ready website that will help of your marketing.',
	},
	{
		icon: <FaMusic />,
		name: 'Music Writing',
		text: 'Music copying, transcription, arranging and composition Services.',
	},
	{
		icon: <FaBullhorn />,
		name: 'Advertising',
		text: 'Advertising services include television, radio, print, mail and web.',
	},
	{
		icon: <FaGamepad />,
		name: 'Game Development',
		text: 'Developing memorable and unique mobile android, ios games.',
	},
	{
		icon: <FaChartBar />,
		name: 'Analytics',
		text: 'Basic, advanced, custom implementations and online media analysis.',
	},
	{
		icon: <FaServer />,
		name: 'Hosting',
		text: 'Full-day or half-day photo shoots with all necessary equipment.',
	},
];

// Define the list of links
export const links = [
	{ to: '/home', icon: <IoMdHome />, text: 'Home' },
	{ to: '/about', icon: <FaUser />, text: 'About' },
	{ to: '/resume', icon: <IoSettingsSharp />, text: 'Resume' },
	{ to: '/portfolio', icon: <FaEye />, text: 'Portfolio' },
	{ to: '/contact', icon: <RiMessage2Fill />, text: 'Contact' },
];

// Define the array of social icons
export const socialIcons = [
	{
		icon: <FaGithub />,
		name: 'GitHub',
		link: 'https://github.com/navnee8989',
	},
	{
		icon: <FaBehance />,
		name: 'Behance',
		link: 'https://www.behance.net/navneetsondarva',
	},
	{
		icon: <FaLinkedin />,
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/navneet-sondarva-46123b193/',
	},
	{ icon: <FaWhatsapp />, name: 'WhatsApp', link: 'wa.link/m43omt' },
	{
		icon: <FaFacebook />,
		name: 'Facebook',
		link: 'https://www.facebook.com/navneett.sondarva/',
	},
	{
		icon: <FaInstagram />,
		name: 'Instagram',
		link: 'https://www.instagram.com/navneet_sondarva/',
	},
	{
		icon: <FaDribbble />,
		name: 'Dribbble',
		link: 'https://dribbble.com/navneet_sondarva',
	},
];

export const workExperience = [
	{
		position: 'Front-end Developer',
		company: 'Facebook Inc.',
		duration: '2013-Present',
		responsibilities:
			'Collaborate with creative and development teams on the execution of ideas.',
	},
	{
		position: 'Front-end Developer',
		company: 'Google Inc.',
		duration: '2011-2012',
		responsibilities:
			'Monitored technical aspects of the front-end delivery for several projects.',
	},
	{
		position: 'Senior Developer',
		company: 'Abc Inc.',
		duration: '2009-2010',
		responsibilities: 'Optimize website performance using latest technology.',
	},
];
export const educationAndCourses = [
	{
		collage: 'Shree Hathisihji Vinay Mandir -Keshod,Junagadh  ---S.S.C',
		time: "  march 2015 || march 2017",
	
		text: "i complated my 10 in this school"
	},
	{
		collage: 'Dudalal Dhanji Ladani High School -Keshod  --- H.S.C',
		time: "  march 2015 || march 2017",
	
		text: "i complated my 12 in this school"
	},
	{
		collage: 'NP Arts & Commerce College Keshod,Junagadh  --- B.Com',
		time: "  march 2017 || march 2021",
		text: "i complated B.com in this school"
	},
	

];

