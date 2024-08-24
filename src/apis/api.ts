import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co',
  headers: {
    Authorization: 'AuthTOken',
    'Content-Type': 'application/json',
  },
});

export const get = api.get;

export const post = api.post;
