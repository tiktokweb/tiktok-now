const { getFeed } = require('tiktokk-api');
const { json } = require('micro');

module.exports = async(req) => {
  const data = await json(req);
  return await getFeed(data);
}