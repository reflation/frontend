Feature('Input username: Request login token')

Scenario(`type vaild username in '/'`, I => {
  I.amOnPage('/')
  I.fillField({ react: 'Input' }, 'muhun')
  I.pressKey('Enter')
  I.see('mail was send')
})

Scenario(`type inVaild username in '/'`, I => {
  I.amOnPage('/')
  I.fillField({ react: 'Input' }, 'muhunkim')
  I.pressKey('Enter')
  I.see('not found username from mail server')
})
