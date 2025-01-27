import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      onLog(level, log, handler) {
        if (log.cause && log.cause.message === "Can't resolve original location of error.") {
          return
        }
        handler(level, log)
      }
    }
  }
})
