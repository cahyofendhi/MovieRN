import Axios, {AxiosInstance} from 'axios';
import  { apiKey, baseUrl } from '../config/env.config';

const lang = 'language=id';

export const client: AxiosInstance = Axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});
client.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});
// client.interceptors.response.use(response => {
//   console.log('Response:', JSON.stringify(response, null, 2));
//   return response;
// });

export const getUrl = (endpoint: string, ...extraParams: string[]): string => {
  const extra = extraParams.length ? extraParams.join('&') : '';
  return `${endpoint}?${apiKey}&${lang}&${extra}`;
};
