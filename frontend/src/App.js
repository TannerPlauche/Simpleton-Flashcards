import React, {Component} from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BaseLayout from "./containers/BaseLayout";
import store from "./store/store";
import HomeContainer from "./containers/HomeContainer";
import CategoryManager from "./containers/CategoryManager";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <BaseLayout>
                    <Switch>
                        <Route path="/admin/categories" component={CategoryManager}/>
                        <Route path="/" component={HomeContainer}/>
                    </Switch>
                    </BaseLayout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
