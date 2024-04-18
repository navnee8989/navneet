import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Loader from './components/Loader'; // Corrected import path

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (remove in production)
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Clean up the timeout to prevent memory leaks
        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <Router>
          
            {isLoading ? (
                <Loader />
            ) : (
                <Routes>
              
                    <Route path="/navneet/" element={<Home />} />
                    <Route path="/navneet/home" element={<Home />} />
                    <Route path="/navneet/about" element={<About />} />
                    <Route path="/navneet/portfolio" element={<Portfolio />} />
                    <Route path="/navneet/resume" element={<Resume />} />
                    <Route path="/navneet/blog" element={<Blog />} />
                    <Route path="/navneet/contact" element={<Contact />} />
                </Routes>
            )}
        </Router>
    );
};

export default App;
