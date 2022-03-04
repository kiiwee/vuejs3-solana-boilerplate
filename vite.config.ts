import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inject({
      Buffer: ['buffer', 'Buffer']
    }),
  ],
  define: {
    "global": {},
    "process.env.NODE_DEBUG": JSON.stringify("")
  },
  optimizeDeps: {
    include: [
      'buffer',
    ]
  },
})