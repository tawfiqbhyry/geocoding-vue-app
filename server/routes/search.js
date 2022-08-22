const express = require("express");
const router = express.Router();
const url = require("url");
const axios = require("axios");

router.get("/:query", async (req, res) => {
  try {
    // add api key && query to url
    const params = new url.URLSearchParams({
      access_token: process.env.MAPBOX_TOKEN,
      ...url.parse(req.url, true).query,
    });
    const query = req.params.query;

    // make request to unsplash api
    const results = await axios.get(
      `${process.env.BASE_URL}/${query}.json?${params}`
    );

    results.data.features.forEach((item) => {
      item.city = null;
      item.state = null;

      item.context.forEach((type) => {
        if (type.id.includes("place")) {
          item.city = type.text;
        }
        if (type.id.includes("region")) {
          item.state = type.text;
        }
      });
    });

    // send response
    const data = results.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
