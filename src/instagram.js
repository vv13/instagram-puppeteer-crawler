exports.login = async (page, username, password) => {
  await page.goto('https://www.instagram.com/accounts/login/')
  await page.waitForSelector('input[name=username]')
  await page.tap('input[name=username]')
  await page.keyboard.type(username, {
    delay: 20,
  })
  await page.tap('input[name=password]')
  await page.keyboard.type(password, {
    delay: 20,
  })
  await page.tap('form button')
}
