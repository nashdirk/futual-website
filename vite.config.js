import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const aliases = {
  Assets: 'assets',
  Components: 'components',
  Pages: 'pages',
  Store: 'store',
  Constants: 'constants',
}
// https://vitejs.dev/config/
export default defineConfig({
  base: '/futual-website/',
  resolve: {
    alias: Object.fromEntries(
      Object.entries(aliases).map(([key, value]) => [
        key,
        path.resolve(__dirname, `src/${value}/`),
      ]),
    ),
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    server: {
      open: '/futual-website/',
    },
  },
})
