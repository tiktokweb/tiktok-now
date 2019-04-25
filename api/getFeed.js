const tiktok = require('tiktokk-api');
const { json } = require('micro');

module.exports = async(req) => {
  const data = await json(req);
  let { version } = data;
  delete data.version;
  
  return await new tiktok(version).getFeed(data);
}