Feature('Input username: Request login token')

Scenario(`type valid username in '/'`, I => {
  I.amOnPage('/login')
  I.fillField({ name: 'mailid' }, 'muhun')
  I.pressKey('Enter')
  I.see('mail was send', 'p#result')
})

Scenario(`type inValid username in '/'`, I => {
  I.amOnPage('/login')
  I.fillField({ name: 'mailid' }, 'muhunkim')
  I.pressKey('Enter')
  I.see('not found username from mail server', 'p#result')
})

Feature('load user data in /main with auth token')

Scenario(`send invalid token, show 'This address is not valid'`, I => {
  const token = 'INVALD'
  I.amOnPage(`/main&token=${token}`)
  I.see('This address is not valid', 'p#result')
})

Scenario(
  'vaild token, but not cached user data in server, so it takes for fecthing some second from dreamy.jejunu.ac.kr',
  I => {
    const { token } = process.env
    I.amOnPage(`/main&token=${token}`)
    I.see('fetch data from jejunu.ac.kr...', 'p#loading')
    setTimeout(() => {}, 3000)
    I.see('cached', 'p#result')
  }
)

Scenario('vaild token, cached user data in server', I => {
  const { token } = process.env
  I.amOnPage(`/main&token=${token}`)
  I.see('cached', 'p#result')
})
