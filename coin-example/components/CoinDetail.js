import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinDetail extends React.Component {
  render () {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Text style={[styles.number,]}>{'#' + (this.props.rank || 'Rank')}</Text>
        <Image
          style={styles.icon}
          // source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
          source={{uri: this.props.iconUri}}
        />
        <View style={{flex: 5, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text style={[styles.text, {flex: 1}]}>{this.props.name || 'Name'}</Text>
          <Text style={[styles.text, {flex: 1}]}>{'Price: ' + (this.props.price || 0)}</Text>
          <Text style={[styles.text, {flex: 1}]}>{'Volume: ' + (this.props.volume || 0)}</Text>
        </View>
        {/*<Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (this.props.time || now)}</Text>*/}
        <Text style={[styles.text, {flex: 3}]}>{'Updated: ' + (Date(this.props.time) || now)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    // backgroundColor: 'blue',
    // borderTopColor: '#a2a09d',
    // borderTopWidth: 0.5,
    borderBottomColor: '#9f9d9a',
    borderBottomWidth: 0.5,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
    margin: 4,
    padding: 4,
  },
  number: {
    color: '#131212',
    marginStart: 8,
    marginEnd: 4,
  },
  text: {
    color: '#131212',
  },
  icon: {
    width: 50,
    height: 50,
    marginStart: 8,
    marginEnd: 16,
  }
});

export default CoinDetail;