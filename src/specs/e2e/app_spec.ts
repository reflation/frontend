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
