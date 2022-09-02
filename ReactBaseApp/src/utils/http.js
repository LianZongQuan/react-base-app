import React, { Component } from 'react';
const localUrl = '192.168.10.108'
const remoteUrl = 'http://47.99.144.176:8086/'

class HttpUtil {
  /*
    *  get请求
    *  url:请求地址
    *  data:参数
    *  callback:回调函数
    * */
  static get(url, params, callback) {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
      } else {
        url += '&' + paramsArray.join('&')
      }
    }
    //fetch请求
    fetch(url, {
      method: 'GET',

    })
      .then((response) => response.json())
      .then((responseJSON) => {
        callback(responseJSON)
      }).catch((error) => {
        console.error(error);
      }).done();
  }
  /*
   *  post请求
   *  url:请求地址
   *  data:参数
   *  callback:回调函数
   * */
  static post(url, params, callback) {
    //fetch请求
    fetch(url, {
      method: 'POST',
      headers: {
      },
      body: params
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        callback(responseJSON)
      }).catch((error) => {
        console.error(error);
      }).done();
  }
  static postJson(url, params, callback) {
    //fetch请求
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        callback(responseJSON)
      }).catch((error) => {
        console.error(error);
      }).done();
  }
  static uploadPdf(url, params, callback) {
    //fetch请求
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: params
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        callback(responseJSON)
      }).catch((error) => {
        console.error(error);
      }).done();
  }


}
export default HttpUtil;