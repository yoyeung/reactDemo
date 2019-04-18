import axios from 'axios';

const topFreeUrl = (limit = 100) => `https://itunes.apple.com/hk/rss/topfreeapplications/limit=${limit}/json`;
const appInfoByAppId = (appId = '') => `https://itunes.apple.com/hk/lookup?id=${appId}`;
const recommandUrl = (limit = 10) => `https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${limit}/json`;

export const getTopFreeList = (limit) => axios.get(topFreeUrl(limit));

export const getRecommandList = (limit) => axios.get(recommandUrl(limit));

export const getAppInfoById = (appId) => axios.get(appInfoByAppId(appId));