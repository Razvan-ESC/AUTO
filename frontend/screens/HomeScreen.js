import React from 'react';
import {View, Text, Button} from 'react-native';
import {DrawerActions } from '@react-navigation/native';

const Home = ({navigation}) => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button
          title="Open drawer"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    );
}

export default  Home;