import Markdown from 'vite-plugin-md'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Markdown()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
      port: process.env.VITE_APP_PORT || 3000
    },
  }
})
