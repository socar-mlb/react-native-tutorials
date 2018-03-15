import React from 'react'
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import CoinDetail from './CoinDetail';
import SampleCoinData from '../data/CoinData';
import { getCoinIconUri } from "../libs/Constants";

class CoinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      isLoaded: false,
    };
    // Toggle the state every second
  }

  componentDidMount() { // After component loaded
    this._getCoinData(10);

    setInterval(() => {
      this._getCoinData(10);
      console.log('toggled!');
      ToastAndroid.show('refresh!', ToastAndroid.SHORT);
    }, 5000);
  }

  _getCoinData(limit) {
    this.setState({
      isLoaded: false,
    });

    fetch(
      `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        coinData: data,
        isLoaded: true,
      });
    });
  }

  render () {
    let detailCells = /* SampleCoinData */ this.state.coinData.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, time} = data; // Destructuring
      return (
        <CoinDetail
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volume={market_cap_usd}
          time={time}
          iconUri={getCoinIconUri(name)}
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
    //       volume={data.market_cap_usd}
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