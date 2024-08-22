import React, {useEffect, useState} from 'react';
import {TextInput, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import Client from './src/graphql/apollo/client';
import {Root} from 'native-base';

import AppRouter from './src/AppRouter';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TextInput.defaultProps.underlineColorAndroid = 'rgba(0,0,0,0)';

// Remove console.log when build release
if (!__DEV__) {
  console.log = () => {};
  console.error = () => {};
}

const App = () => {
  const [client, setClient] = useState();
  const {getApolloClient} = Client();

  const getClient = async () => {
    const _client = await getApolloClient();
    console.log('_client', _client);
    if (_client) setClient(_client);
  };

  useEffect(() => {
    getClient();
  }, []);

  if (!client) return null;
  return (
    <ApolloProvider client={client}>
      <Root>
        <AppRouter></AppRouter>
      </Root>
    </ApolloProvider>
  );
};

export default App;


