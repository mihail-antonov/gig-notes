import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
          registerType: 'autoUpdate',
          includeAssets: [
              "**/*"
          ],
          manifest: {
              'name': 'Gig Notes',
              'short_name': 'GigNotes',
              'description': 'Yet another notes app',
              'theme_color': '#1E1F2B',
              'background_color': '#1E1F2B',
              'start_url': '/',
              'scope': '/',
              'display': 'standalone',
              'orientation': 'portrait',
              'icons': [
                  {
                      'src': '/assets/icons/72x72.png',
                      'sizes': '72x72',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/96x96.png',
                      'sizes': '96x96',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/128x128.png',
                      'sizes': '128x128',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/144x144.png',
                      'sizes': '144x144',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/152x152.png',
                      'sizes': '152x152',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/192x192.png',
                      'sizes': '192x192',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/384x384.png',
                      'sizes': '384x384',
                      'type': 'image/png'
                  },
                  {
                      'src': '/assets/icons/512x512.png',
                      'sizes': '512x512',
                      'type': 'image/png'
                  }
              ]
          }
      })
  ],
})
