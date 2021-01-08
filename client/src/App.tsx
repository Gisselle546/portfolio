import React from 'react';
import {ApolloLink, ApolloClient, InMemoryCache,HttpLink,ApolloProvider } from '@apollo/client';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import { onError } from "@apollo/client/link/error";

import Homepage from './Components/homepage'
import DrawerBar from './Components/Drawer'
import Footer from './Components/footer';
import Projects from './Components/Projects';

function App() {

  const httpLink = new HttpLink({
    uri: 'https://portfoliogise.herokuapp.com/api',
    credentials:'include'
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = ApolloLink.from([errorLink,httpLink]); 


  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    
    
  })

  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <DrawerBar/>
            <div style={{minHeight: "100vh"}}>
            <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/projects" component={Projects}/>
                    
            </Switch>
            </div>
           <Footer/>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
