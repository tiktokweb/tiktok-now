const { getFeed } = require('tiktokk-api');
const { json, send } = require('micro');

module.exports = async(req, res) => {
  try {
    const data = await json(req);
    return send(await getFeed(data), 200);
  } catch (e) {
    console.error(e.message);
    return send(e, 400);
  }
}