import Fastify from "fastify"

const app = Fastify()

app.get('/', () => {
  return 'Wello World'
})

app.listen({
  port: 3333,
})