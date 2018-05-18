import React from 'react';
import { StyleSheet, Text, View, WebView, Button, Dimensions, TouchableOpacity, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: '云刺绣'
    }
  }

  constructor() {
    super();
    this.sate = {
      // 设计数据格式
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    Alert.alert('正在提交', '.....................')

  }

  render() {
    return(
      <View
        style={{
          flexDirection: 'column',
          height: windowHeight - 80
        }}
      >
        <View
          style={{
            flex: 1
            // height: windowHeight - 150
          }}
        >
          <WebView
            style={{
            }}
            source={{uri: 'http://bfcx.chslab.com/'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Setting')
            }}
            style={{
              height: 50,
              width: '50%',
            }}
          >
            <Text style={{
              height: '100%',
              paddingTop: 13,
              backgroundColor: '#EEE',
              textAlign: 'center'
            }}> 设置 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.handleSubmit()
            }}
            style={{
              height: 50,
              width: '50%',
            }}
          >
            <Text style={{
              height: '100%',
              backgroundColor: '#5BE26F',
              color: '#FFF',
              paddingTop: 13,
              textAlign: 'center'
            }}> 提交 </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home;
