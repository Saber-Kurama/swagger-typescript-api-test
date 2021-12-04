/*
 * @Author: saber
 * @Date: 2021-12-03 15:48:13
 * @LastEditTime: 2021-12-03 18:24:14
 * @LastEditors: saber
 * @Description: 
 */
const { generateApi } = require('swagger-typescript-api');
const path = require("path");
const fs = require("fs");
generateApi({
  url: 'http://127.0.0.1:5000/another-example.json',
  name: "MySuperbApi.ts",
  output: path.resolve(process.cwd(), './src/api'),
  templates: path.resolve(process.cwd(), './templates'),
  httpClientType: "axios",
  modular: true,
  defaultResponseType: "void",
  moduleNameFirstTag: true,
  extractRequestParams: true, // path 和 query 合并
  hooks: {
    onCreateComponent: (component) => {
      // console.log('component----', component)
      return component 
    },
    onCreateRequestParams: (rawType) => {
      // console.log('rawType------', rawType)
      return rawType; 
    },
    onCreateRoute: (routeData) => {
      // console.log('routeData----', routeData)
      return routeData 
    },
    onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
    onFormatRouteName: (routeInfo, templateRouteName) => {},
    onFormatTypeName: (typeName, rawTypeName) => {},
    onInit: (configuration) => {
      // console.log('configuration', configuration)
      // TODO: 解决一下  tags 中文的问题
      return configuration; 
    },
    onParseSchema: (originalSchema, parsedSchema) => {},
    onPrepareConfig: (currentConfiguration) => {
      // console.log('currentConfiguration', currentConfiguration.modelTypes)
      return currentConfiguration;
    }
  }
})