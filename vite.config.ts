import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// dev 서버는 public 폴더의 디렉터리 경로(/career/)를 index.html로 연결하지 않아서 직접 연결
const careerPage = (): Plugin => ({
  name: 'career-page',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/career' || req.url === '/career/') req.url = '/career/index.html'
      next()
    })
  },
})

export default defineConfig({
  plugins: [react(), careerPage()],
  server: {
    port: 3000,
  },
})
