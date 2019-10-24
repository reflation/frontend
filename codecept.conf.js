exports.config = {
  tests: './src/specs/e2e/*_spec.ts',
  output: '.output',
  helpers: {
    Puppeteer: {
      url: 'localhost:3000',
      show: true,
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'dream-plus',
  require: ['ts-node/register'],
}
