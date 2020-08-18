import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Introduce from "./pages/Introduce";
import News from "./pages/News/NewsList";
import NewsDetail from "./pages/News/NewsDetail";
import RecruitmentList from "./pages/Recruitment/RecruitmentList";
import RecruitmentDetail from "./pages/Recruitment/RecruitmentDetail";
import ShoppingGuide from "./pages/ShoppingGuide";
import Juridical from "./pages/Juridical";
import Error404 from "./pages/Error404";
import Example from "./pages/Example";

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/introduce" component={Introduce}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/news/1" component={NewsDetail}/>
                <Route exact path="/recruitment" component={RecruitmentList}/>
                <Route exact path="/recruitment/1" component={RecruitmentDetail}/>
                <Route exact path="/shopping-guide" component={ShoppingGuide}/>
                <Route exact path="/juridical" component={Juridical}/>
                <Route component={Error404}/>
                <Route exact path="/example" component={Example}/>
            </Switch>
        );
    }
}

export default Routers;
   