describe('Google Test', () => {
  it('should open google homepage', async () => {
    await page.goto('https://google.com')
    await new Promise((resolve, reject) => setTimeout(resolve, 5000))
  }, 
  15000)
})