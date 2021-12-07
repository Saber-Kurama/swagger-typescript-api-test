/*
 * @Author: saber
 * @Date: 2021-12-06 20:27:48
 * @LastEditTime: 2021-12-07 16:05:00
 * @LastEditors: saber
 * @Description: 
 */
import SaberHttp from '@digitforce/saber-http';
import custom_http from '@digitforce/saber-http/dist/js/modern/custom-http'∏
export const http = custom_http as SaberHttp;
// http.request({
//   url:'',
//   data: '',
//   params: ''
// })
export default http;