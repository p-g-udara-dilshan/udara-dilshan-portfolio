import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// One static React build for Cloudflare Pages, Netlify, or Vercel.
export default defineConfig({ plugins: [react()] })
