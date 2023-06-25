const { access } = require("fs/promises");
const { constants } = require("fs");
const path = require("path");
const express = require("express");
const history = require('connect-history-api-fallback');

const DIST_PATH = path.resolve(__dirname, "../dist");
const SITE_HOST = "localhost";
const SITE_PORT = 3333;

const startSite = (cb) => {
  const app = express();
  app.use(history({
    index: '/index.html'
  }));
  app.use(express.static(DIST_PATH));
  app.listen(SITE_PORT, SITE_HOST, cb);
};

const tryAccessDistFile = async () => {
  try {
    await access(DIST_PATH, constants.R_OK);
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  try {
    await tryAccessDistFile();
  } catch (error) {
    console.debug("執行失敗。");
    console.warn(error);
    return;
  }

  startSite(()=>{
    console.info("執行成功。");
    console.info(`預覽網頁: http://${SITE_HOST}:${SITE_PORT}`);
  });
};

main();