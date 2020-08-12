// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Page403, Page404, Page500 } from "./pages/Error"
import { MainLogin, MainPage } from "./pages"
import { LOGINS, MAINS, PATHS, STORYBOOKS } from "./routes"

import StoryBook from "./storybook/config/page/StoryBook";


// store 
import { Provider } from 'react-redux';
import configureStore from './store';


const store = configureStore();


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        {LOGINS.map((data, idx) => (
                            <Route exact key={idx} path={data.path} render={(props) => <MainLogin data={data} {...props} />} />
                        ))}

                        {MAINS.map((data, idx) => (
                            <Route exact key={idx} path={data.path} render={(props) => <MainPage data={data} PATHS={PATHS} {...props} />} />
                        ))}
                        {STORYBOOKS.map((data, idx) => (
                            <Route exact key={idx} path={data.path} render={(props) => <StoryBook data={data} PATHS={PATHS} {...props} />} />
                        ))}
                        <Route exact path="/403" component={Page403} />
                        <Route exact path="/404" component={Page404} />
                        <Route exact path="/500" component={Page500} />
                    </div>
                </Router>
            </Provider>
        )
    }
};
//                    <Route path="*" component={Page404} />

//// PageEmployeeEdit

export default App;
