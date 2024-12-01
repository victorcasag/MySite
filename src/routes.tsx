import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './components/About';
import Template from './components/Template';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Intro from './components/Intro';
import ScrollToTop from './components/Utils';
export default function AppRoutes(){
    return(
        <div>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Template />}>
                        <Route index element={<Home />} />
                        <Route index element={<Intro />} />
                        <Route index element={<About />} />
                        <Route index element={<Footer />} />
                    </Route>
                    
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}