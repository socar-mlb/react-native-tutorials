import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CoinDetail from './CoinDetail';
import SampleCoinData from '../data/CoinData';

class CoinView extends React.Component {
  render () {
    let detailCells = SampleCoinData.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, time} = data; // Destructuring
      return (
        <CoinDetail
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volumn={market_cap_usd}
          time={time}
        />
      );
    });

    // let detailCells = [];
    //
    // for (var i = 0; i < sampleData.length; i++) {
    //   let data = sampleData[i];
    //   let coinDetail = (
    //     <CoinDetail
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volumn={data.market_cap_usd}
    //     />
    //   )
    //   detailCells.push(coinDetail);
    // }

    return (
      <View style={this.props.style}>{ /* Ready to get style from a parent component */ }
        {/*<View style={styles.container}>*/}
        {/*<Text>New View</Text>*/}
        {/*</View>*/}
        {/*<Text>코인뷰가 나올것입니다.</Text>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {/*<CoinDetail></CoinDetail>*/}
        {detailCells}
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