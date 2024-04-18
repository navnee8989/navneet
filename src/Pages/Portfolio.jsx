import Sidebar from '../component/Sidebar';
import one from '../assets/Screenshot 2024-02-22 115957.png'
import two from '../assets/Screenshot 2024-02-22 120040.png'
import three from '../assets/Screenshot 2024-02-22 120121.png'
import four from '../assets/Screenshot 2024-02-22 120221.png'
import '../style/portfolio.css'

import '../style/resume.css';

const Portfolio = () => {
	return (
		<>
			<div className="side-tow bg-black">
				<Sidebar />
			</div>
			<div className="about-page flex mobile:w-full ml-2 pl-18">
				<div className="resume-main-conatnt mt-20 ">
					<div className="-resume-heading text-center mb-20">
						<span className=" text-9xl font-bold text-zinc-500 text-center pt-20 opacity-30 hover:text-red-500 transition-all ease-linear mobile:text-4xl uppercase w-full mx-auto">
							portfolio
						</span>
					</div>
					<div className="expariance flex justify-between  gap-5">
						<div className="skill-card col-50 mx-auto flex flex-col gap-7">
                  <img src={one} alt="" style={{height: '350px'}}/>
                  <img src={two} alt=""  style={{height: '250px'}}/>
                  <img src={three} alt=""  style={{height: '200px'}}/>
                  <img src={four} alt=""  style={{height: '200px'}}/>
							
						</div>
            <div className="skill-card col-50 mx-auto flex flex-col gap-7">
                  <img src={one} alt="" style={{height: '350px'}}/>
                  <img src={two} alt=""  style={{height: '250px'}}/>
                  <img src={three} alt=""  style={{height: '200px'}}/>
                  <img src={four} alt=""  style={{height: '200px'}}/>
							
						</div>
					</div>
				
				</div>
				<div className="side-three mobile:hidden"></div>
			</div>
		</>
	);
};

export default Portfolio;
