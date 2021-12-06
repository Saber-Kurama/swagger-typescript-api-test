/*
 * @Author: saber
 * @Date: 2021-12-06 20:27:48
 * @LastEditTime: 2021-12-06 20:33:42
 * @LastEditors: saber
 * @Description: 
 */
import SaberHttp from '@digitforce/saber-http';
import custom_http from '@digitforce/saber-http/dist/js/modern/custom-http'

export const http = custom_http as SaberHttp;

export default http;