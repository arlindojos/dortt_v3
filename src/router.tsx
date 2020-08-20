import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dortt from './pages/Dortt';
import WebsitesBlogs from './pages/Websites_Blogs';
import Logos from './pages/Logos';
import SignUp from './pages/Sign_up';
import AboutUs from './pages/About_us';
import ContactUs from './pages/contact';
import LogIn from './pages/log_in';
import WebOptimize from './pages/web_optimization';
import GotService from './pages/GotService';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dortt} />
            <Route path="/services/Websites-and-Blogs" component={WebsitesBlogs} />
            <Route path="/services/logos" component={Logos} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/about_us" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/log_in" component={LogIn} />
            <Route path="/services/Optimize-Your-Website" component={WebOptimize} />
            <Route path="/services/contact" component={GotService} />
        </Switch>
    </BrowserRouter>
)

export default Routes;