import axios from 'axios';

// 测试多仓库Git操作

const fetch = axios.create({
  baseURL:process.env.NODE_ENV === 'production'?'http://localhost:8080/mock':'/api',
  timeout:1000,
})

export const IndexApi = ()=>{
  return fetch({
    url:'/index.json',
    method:'get'
  })
}

export const CityApi = ()=>{
  return fetch({
    url:'/city.json',
    method:'get'
  })
}

export const DetailApi = (params)=>{
  return fetch({
    url:'/detail.json',
    params:params,
    method:'get'
  })
}