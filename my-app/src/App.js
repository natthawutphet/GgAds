import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './Users';
import Nav from './Nav';
import Uip from './Uip';
import Ip from './Ip';

function App() {
    return (
        <BrowserRouter>
        < Nav />
        < Uip />
        < Ip />
        

            <Routes>
             
                <Route path="/" element={<Home />} />
               

                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;


