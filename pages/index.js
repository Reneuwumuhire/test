import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LinkList from './components/linkList'
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import CreateLink from './components/createLink'
import Header from './components/header'
import Login from './components/login'
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './constants';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function Home() {
  LogRocket.init('a1hh89/test');
  setupLogRocketReact(LogRocket);
  LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
    name: 'James Morrison',
    email: 'jamesmorrison@example.com',

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
  });
  return (
    <ApolloProvider client={client}>
      {/* <Header /> */}
      <LinkList />
      {/* <CreateLink /> */}
      {/* <Login /> */}
    </ApolloProvider>
  )
}
