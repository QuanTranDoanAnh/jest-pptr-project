import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from '..//pages/components/TopBar'

describe('Example', () => {
  let homepage
  let loginPage
  let feedbackPage
  let topBar

  beforeAll(async () => {
    jest.setTimeout(15000)
    homepage = new HomePage()
    loginPage = new LoginPage()
    feedbackPage = new FeedbackPage()
    topBar = new TopBar()
  })

  it('homepage should work', async () => {
    await homepage.visit()
  })

  it('navbar should be displayed', async () => {
    await homepage.isNavbarDisplayed()
    await topBar.isTopBarDisplayed()
  })

  it('try to login', async () => {
    await loginPage.visit()
    await loginPage.isLoginFormDisplayed()
    await loginPage.login("username", "password")
    await loginPage.wait(5000)
  }, 15000)

  it('feedback should work', async () => {
    await feedbackPage.visit()
    await feedbackPage.isFeedbackFormDisplayed()
    await feedbackPage.submitFeedback(
      "QuanTDA1", 
      "td.anhquan@gmail.com",
      "Test Feedback Form",
      "Feedback Form should work")
    await feedbackPage.wait(5000)
  }, 15000)
})