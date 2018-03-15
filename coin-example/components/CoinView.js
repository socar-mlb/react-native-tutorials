import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CoinDetail from './CoinDetail';

class CoinView extends React.Component {
  render () {
    return (
      <View style={this.props.style}>{ /* Ready to get style from a parent component */ }
        {/*<View style={styles.container}>*/}
        {/*<Text>New View</Text>*/}
        {/*</View>*/}
        {/*<Text>코인뷰가 나올것입니다.</Text>*/}
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
      </View>
    )
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     // width: '50%',
//     flex: 1,
//     flexDirection: 'column', // row
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'space-around', // center, space-around
//   },
// });

export default CoinView;