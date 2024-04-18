import Hero_page from "../component/Hero_page";
import Sidebar from "../component/Sidebar";

const Home = () => {
	return <>

    <div className="center flex justify-center">

        <Sidebar />
        <Hero_page />
    </div>
    </>;
};

export default Home;
