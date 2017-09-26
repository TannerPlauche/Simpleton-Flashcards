import React, { Component } from "react";
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./containers/BaseLayout";
import store from "./store/store";
import HomeContainer from "./containers/HomeContainer";
import CategoryManager from "./containers/CategoryManager";
import CardManager from "./containers/CardManager";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <BrowserRouter>
                        <Switch>
                            <BaseLayout>
                                <Route path="/admin/categories" component={CategoryManager} />
                                <Route path="/admin/cards" component={CardManager} />
                                <Route exact path="/" component={HomeContainer} />
                            </BaseLayout>
                        </Switch>
                    </BrowserRouter>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
