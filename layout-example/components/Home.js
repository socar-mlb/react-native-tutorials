import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Open up App.js to start working on your app!</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Shake your phone to open the developer menu.</Text>*/}
        <Button
          title="Column Layout"
          onPress={() => {
            this.props.navigation.navigate('Column');
          }}
        />
        <Button
          title="Row Layout"
          onPress={() => {
            this.props.navigation.navigate('Row');
          }}
        />
        <Button
          title="Absolute Layout"
          onPress={() => {
            this.props.navigation.navigate('Absolute');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
