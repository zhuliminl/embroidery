import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

// 验证数据的正则表达式
const portReg = 'xxx'
const addressReg = 'xxx'


class Setting extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: '设置'
    }
  }
  constructor() {
    super();
    this.state = {
      port: '请输入端口号',
      address: '请输入地址'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.alertError = this.alertError.bind(this);
    this.alertSuccess = this.alertSuccess.bind(this);
  }

  handleSubmit() {
    console.log('handleSubmit')
    const data = this.state;
    // 验证数据
    let port = ''
    if(!port) {
      this.alertError('端口号错误 ')
    }
  }

  // 数据验证错误
  alertError(message) {
    // 提示错误
    Alert.alert('字段错误!', message)
  }
  // 提示操作成功
  alertSuccess() {
    Alert.alert('操作成功!', message)
  }

  render() {
    return(
      <View
        style={{
          paddingTop: 100,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >

        <View
          style={{
            width: 200,
            // height: 300,
          }}
        >
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                width: 80,
                padding: 10
              }}
            >
              端口号
            </Text>
            <TextInput
              style={{
                height: 40
              }}
              onChangeText={(text) => {
                this.setState({
                  port: text
                })
              }}
              value={this.state.port}
            />
            
          </View>

          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                width: 80,
                padding: 10
              }}
            >
              地址
            </Text>
            <TextInput
              style={{
                height: 40
              }}
              onChangeText={(text) => {
                this.setState({
                  address: text
                })
              }}
              value={this.state.address}
            />
            
          </View>

        </View>


        {/* 提交 */}
        <TouchableOpacity
          onPress={() => {
            this.handleSubmit()
          }}
          style={{
            marginTop: 50,
            paddingLeft: 50,
            paddingRight: 50,
            height: 80,
            width: '100%'
          }}
        >
          <Text
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#5BE26F',
              color: '#FFF',
              textAlign: 'center'
            }}
          > 提交 </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default Setting;
