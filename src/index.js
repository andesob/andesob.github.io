import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from "./pages/Homepage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import LogPage from "./pages/LogPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_WARCRAFTLOGS_URI,
});

const authLink = setContext((_, {headers}) => {
    const token = process.env.REACT_APP_WARCRAFTLOGS_BEARER;
    return {
        headers: {
            ...headers,
            authorization: "Bearer " + token,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


root.render(
    <div>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <ApolloProvider client={client}>
            <Router>
                <ResponsiveAppBar/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/app" element={<App/>}/>
                    <Route path="/logpage" element={<LogPage/>}/>
                </Routes>
            </Router>
        </ApolloProvider>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
