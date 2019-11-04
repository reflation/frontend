const show = process.env.NODE_ENV === 'development'

exports.config = {
  tests: './src/specs/e2e/*_spec.ts',
  output: '.output',
  helpers: {
    Puppeteer: {
      url: 'localhost:3000',
      show,
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'dream-plus',
  require: ['ts-node/register'],
}
