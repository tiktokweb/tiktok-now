const { getFeed } = require('tiktokk-api');
const { json } = require('micro');

module.exports = async(req, res) => {
  try {
    const data = await json(req);
    return res.send(await getFeed(data), 200);
  } catch (e) {
    console.error(e.message);
    return res.send(e, 400);
  }
}