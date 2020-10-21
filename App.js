import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './components/search';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaView>
        <Search/>
      </SafeAreaView>
    );
  };
};
