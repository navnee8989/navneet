// App.jsx

import  {  useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Loader from './component/Loader';



const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    


    useEffect(() => {
        const isLoadingTrue = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(isLoadingTrue);
    }, []);

    return (
        <Router>
           
            {isLoading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            )}
        </Router>
    );
};

export default App;
