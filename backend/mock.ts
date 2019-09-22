import * as Hapi from '@hapi/hapi'
import * as HapiType from '@types/hapi' // TODO: move to ../types/hapi.d.ts

import * as List from './models/doSearch.json'
interface commonProps {
  mode: 'doList'
  student_no: string
}

interface doList extends commonProps {
  mode: 'doSearch'
  year: tYear
  term_gb: tSemester_num
  group_gb: 20
  outside_seq: 0 | 1
  del_gb: 'AND SJ_DEL_GB IS NULL'
}

interface Res extends HapiType.Request {
  payload: commonProps | doList
}

const init = async () => {
  const port = process.env.PORT || 3000
  const server = new Hapi.Server({
    port,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost:8080'],
      },
    },
  }) as HapiType.Server

  const keyValue = {
    10: 'first',
    11: 'summer',
    20: 'last',
    21: 'winter',
  }

  server.route({
    method: 'POST',
    path: '/',
    handler: async ({ payload: { mode, year, term_gb } }: Res, h) => {
      if (mode === 'doSearch') return List
      if (mode === 'doList') {
        const data = await import(
          `./models/doList/${year}/${keyValue[term_gb]}.json`
        )
        return h.response(data).code(200)
      }
      return h.response('올바르지 못한 요청입니다').code(400)
    },
  })

  await server.start()
  console.info('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.error(err)
  process.exit(1)
})

init()
