/*
 * @Author: saber
 * @Date: 2021-12-03 15:48:13
 * @LastEditTime: 2021-12-07 21:12:54
 * @LastEditors: saber
 * @Description:
 */
const { generateApi } = require("swagger-typescript-api");
const path = require("path");
const { resolve } = require("path");
const fs = require("fs");
const makeDir = require("make-dir");
const pathIsExist = (path) => path && fs.existsSync(path);

const removeDir = (path) => {
  try {
    fs.rmSync(path, { recursive: true });
  } catch (e) {}
};

const createDir = (path) => {
  try {
    makeDir.sync(path);
  } catch (e) {}
};

const cleanDir = (path) => {
  removeDir(path);
  createDir(path);
};
const createFile = ({ path, fileName, content, withPrefix }) =>
  fs.writeFileSync(
    resolve(__dirname, path, `./${fileName}`),
    `${withPrefix ? filePrefix : ""}${content}`,
    () => {}
  );
generateApi({
  url: "http://localhost:5000/github-swagger.json",
  name: "MySuperbApi.ts",
  // output: path.resolve(process.cwd(), './src/api'),
  output: false,
  templates: path.resolve(process.cwd(), "./templates"),
  httpClientType: "axios",
  modular: true,
  generateRouteTypes: false,
  defaultResponseType: "void",
  moduleNameFirstTag: true,
  extractRequestParams: true, // path 和 query 合并
  hooks: {
    onCreateComponent: (component) => {
      // console.log('component----', component)
      return component;
    },
    onCreateRequestParams: (rawType) => {
      // console.log('rawType------', rawType)
      return rawType;
    },
    onCreateRoute: (routeData) => {
      // console.log('routeData----', routeData)
      return routeData;
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
    },
  },
})
  .then(({ files, configuration }) => {
    // console.log('files', files)
    const output = path.resolve(process.cwd(), './src/api');
    const cleanOutput = true;
    
    if (pathIsExist(output)) {
      if (cleanOutput) {
        cleanDir(output);
      }
    } else {
      createDir(output);
    }
    files.forEach(({ content, name }) => {
      if(name === 'http-client.ts'){
        return;
      }
      if(name === 'data-contracts.ts'){
        name = 'data.d.ts'
      }
      createFile({
        path: path.resolve(process.cwd(), './src/api'),
        fileName: name,
        content,
        withPrefix: false,
      });
    });
  })
  .catch((e) => console.error(e));
