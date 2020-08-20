//libs
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
//components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Chat from "./components/common/Chat";

//pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/Project/ProjectDetail";
import Introduce from "./pages/Introduce/Introduce";
import News from "./pages/News/NewsList";
import NewsDetail from "./pages/News/NewsDetail";
import RecruitmentList from "./pages/Recruitment/RecruitmentList";
import RecruitmentDetail from "./pages/Recruitment/RecruitmentDetail";
import TransactionLevel from "./pages/TransactionLevel/TransactionLevel";
import ShoppingGuide from "./pages/ShoppingGuide/ShoppingGuide";
import Juridical from "./pages/Juridical/Juridical";
import Promotion from './pages/Promotion/Promotion'
import Elements from "./pages/Elements/Elements";
import Example from "./pages/Example";
import Error404 from "./pages/Error/Error404";

const store = configureStore()

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/project" component={Project} />
                        <Route exact path="/project/1" component={ProjectDetail} />
                        <Route exact path="/introduce" component={Introduce} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/news/1" component={NewsDetail} />
                        <Route exact path="/recruitment" component={RecruitmentList} />
                        <Route exact path="/recruitment/1" component={RecruitmentDetail} />
                        <Route exact path="/transaction-level" component={TransactionLevel} />
                        <Route exact path="/shopping-guide" component={ShoppingGuide} />
                        <Route exact path="/juridical" component={Juridical} />
                        <Route exact path="/promotion" component={Promotion} />
                        <Route exact path="/elements" component={Elements} />
                        <Route exact path="/example" component={Example} />
                        <Route component={Error404} />
                    </Switch>

                    <Footer />

                    {/* <Chat /> */}

                </Router>
            </Provider>
        );
    }
}

export default App;
