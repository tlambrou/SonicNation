const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import App from "../public/javascripts/components/app";
import React from "react";

/* GET home page. */
router.get("/", function(req, res) {
  // const markup = renderToString(<App />);
  const markup = JSON.stringify(<App />);

<<<<<<< HEAD
  var awsClient = amazon.createClient({
    awsId: process.env.AWSAccessKeyId,
    awsSecret: process.env.AWSSecretKey
  });

 // BrowseNode: 11091801

  // awsClient.itemLookup({
  // idType: 'UPC',
  // itemId: '884392579524',
  // responseGroup: "ItemAttributes,BrowseNodes"
  awsClient.itemSearch({
  keywords: 'crybaby wah',
  browseNodeId: '11091801',
  responseGroup: "ItemAttributes,BrowseNodes,Images"
  }).then(function(results){
    console.log("We got results!: ", results[0].MediumImage[0]);
  }).catch(function(err){
    console.log("There was an error: ", err.Error[0].Message);
  });

  console.log(`markup: ${JSON.parse(markup)}`);
  res.render("index", {
    title: "SonicNation",
    markup: JSON.parse(markup)
=======
  res.render("index", {
    title: "Express",
    markup: markup
>>>>>>> parent of ee07712... Got AWS Product API working
  });
});

module.exports = router;
