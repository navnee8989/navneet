import { IoCall, IoCheckbox, IoLocation } from 'react-icons/io5';

import Sidebar from '../component/Sidebar';

import '../style/resume.css';
import { FaMailBulk } from 'react-icons/fa';
import Form from '../component/Form';

const Contact = () => {
	return (
		<>
			<div className="side-tow bg-black">
				<Sidebar />
			</div>
			<div className="about-page flex mobile:w-full ml-2 pl-18">
				<div className="resume-main-conatnt mt-20 ">
					<div className="-resume-heading text-center mb-20">
						<span className=" text-9xl font-bold text-zinc-500 text-center pt-20 opacity-30 hover:text-red-500 transition-all ease-linear mobile:text-4xl uppercase w-full mx-auto">
							Contact
						</span>
					</div>
					<h1 className="text-xl text-center text-white font-bold pb-4 hover:text-green hover:duration-700 hover:transition-all hover:ease">
						<span className="text-green mr-3 ">Get</span>in Touch
					</h1>
					<div className="expariance flex justify-between  gap-3">
						<div className="skill-card col-50 mx-auto gap-5">
							<div className="rounded-xl bg-dark py-10 text-white flex ">
								<div className="contact-icon flex items-center p-3 text-3xl">
									<IoLocation />
								</div>
								<div className="contact-text">
									<h2>Address</h2>
									<span>
										1/304 Godavari Apartment,Chandkheda D kabin,Ahmedabad-380019
									</span>
								</div>
							</div>
							<div className="rounded-xl bg-dark py-10 text-white flex mt-10">
								<div className="contact-icon flex items-center p-3 text-3xl">
									<IoCall />
								</div>
								<div className="contact-text">
									<h2>Phone Number</h2>
									<span>+919687726421</span>
								</div>
							</div>
						</div>
						<div className="skill-card col-50 mx-auto ">
							<div className="rounded-xl bg-dark py-10 text-white flex">
								<div className="contact-icon flex items-center p-3 text-3xl">
									<FaMailBulk />
								</div>
								<div className="contact-text">
									<h2>Email</h2>
									<span>navneet.sondrva@outlook.com</span>
								</div>
							</div>
							<div className="rounded-xl bg-dark py-10 text-white flex mt-5">
								<div className="contact-icon flex items-center p-3 text-3xl">
									<IoCheckbox />
								</div>
								<div className="contact-text">
									<h2>Freelance</h2>
									<span>Available</span>
								</div>
							</div>
						</div>
					</div>
          <div className="contact-form w-full mx-auto flex justify-center pb-36">
					<Form />
          </div>
				</div>
			</div>
			<div className="side-three mobile:hidden"></div>
		</>
	);
};

export default Contact;
