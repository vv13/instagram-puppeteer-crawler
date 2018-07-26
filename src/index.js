require('dotenv').config()

const puppeteer = require("puppeteer");
const instagram = require("./instagram");
const downloadFile = require("./downloadFile");

async function testinstagram() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await instagram.login(page, process.env.USER_NAME, process.env.USER_PASSWORD);
  await page.goto(`https://www.instagram.com/${process.env.USER_NAME}/`);
  const imgs = await page.$$eval("img.FFVAD", imgs => {
    return imgs.map(img => img.srcset.split(","));
  });
  imgs.forEach(async imgsArray => {
    const img = imgsArray.pop().split(" ")[0];
    await downloadFile(img);
    console.log(`download ${img} success!`)
  });
  await browser.close()
}

testinstagram();
