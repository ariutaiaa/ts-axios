import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import {buildURL} from "./helpers/url";
import {transformRequest} from "./helpers/data";
import {processHeaders} from "./helpers/headers";

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}


function transformURL(config:AxiosRequestConfig):string{
  const {url,params}=config;
  return buildURL(url,params);
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
  config.headers=transformRequestData(config)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config:AxiosRequestConfig):any{
  const {headers={},data}=config
  return processHeaders(headers,data)
}

export default axios
