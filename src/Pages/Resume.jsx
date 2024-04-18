import { educationAndCourses, workExperience } from '../Additional';
import Sidebar from '../component/Sidebar';
import '../style/resume.css';

const Resume = () => {
	return (
		<>
			<div className="side-tow bg-black">
				<Sidebar className='bg-black'/>
			</div>
			<div className="about-page flex mobile:w-full ml-2 pl-18">
				<div className="resume-main-conatnt mt-20 ">
					<div className="-resume-heading text-center mb-20">
						<span className=" text-9xl font-bold text-zinc-500 text-center pt-20 opacity-30 hover:text-green-500 transition-all ease-linear mobile:text-4xl uppercase w-full mx-auto">
							resume
						</span>
					</div>
					<div className="expariance flex justify-between  gap-5">
						<div className="skill-card col-50 mx-auto">
							<h1 className="uppercase text-2xl from-stone-500 my-9  text-white  font-bold ">
								<span className="text-green-800 text-2xl ">My</span>Expariance
							</h1>
							<div className="rounded-xl bg-dark py-10">
								{workExperience.map((item,index) => (
									<div key={index} className="main-contact">
										<div className="skill-head ">
											<h1 className="text-white  text-xl font-semibold pt-5 pl-5">
												{item.position}
											</h1>
										</div>
										<div className="skill-time pl-5">
											<span className="text-stone-400 text-sm">
												{item.duration}
											</span>
										</div>
										<div className="skill-text text-left text-white mt-3  font-thin pl-5">
											{item.responsibilities}
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="skill-card col-50 mx-auto">
							<h1 className="uppercase text-2xl from-stone-500 my-9  text-white  font-bold ">
								<span className="text-green-800 text-2xl ">My</span>Education
							</h1>
							<div className="rounded-xl bg-dark py-12">
								{educationAndCourses.map((item,index) => (
									<div key={index} className="main-contact">
										<div className="skill-head ">
											<h1 className="text-white  text-xl font-semibold pt-5 pl-5">
												{item.collage}
											</h1>
										</div>
										<div className="skill-time pl-5">
											<span className="text-stone-400 text-sm">
												{item.time}
											</span>
										</div>
										<div className="skill-text text-left text-white mt-3  font-thin pl-5">
											{item.text}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="CV flex justify-center items-center ">
									<div className="">
											<button className='p-10 ' id='CV'>DownLoad CV</button>
									</div>
					</div>
				</div>
				<div className="side-three mobile:hidden"></div>
			</div>
		</>
	);
};

export default Resume;
