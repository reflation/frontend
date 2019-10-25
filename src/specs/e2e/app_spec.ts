import * as dotenv from 'dotenv'

dotenv.config()

const token = process.env.token!

Feature('Input username: Request login token')

Scenario(`type vaild username in '/'`, I => {
  I.amOnPage('/')
  I.fillField({ name: 'mailid' }, 'muhun')
  I.pressKey('Enter')
  I.see('mail was send', 'p#result')
})

Scenario(`type inVaild username in '/'`, I => {
  I.amOnPage('/')
  I.fillField({ name: 'mailid' }, 'muhunkim')
  I.pressKey('Enter')
  I.see('not found username from mail server', 'p#result')
})

Scenario(`Go to '/main' using vaild token `, I => {
  I.amOnPage(`/main&token=${token}`)
  I.see('token is vaild')
})

Scenario(`Go to '/main' using invaild token`, I => {
  I.amOnPage(`/main&token=INVAILD`)
  I.see('token is invaild')
})
