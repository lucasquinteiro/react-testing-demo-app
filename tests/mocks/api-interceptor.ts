if (typeof window === 'undefined') {
    const { server } = require('./msw-server')
    server.listen()
  } else {
    const { worker } = require('./msw-browser')
    worker.start()
  }
  
export {}
  