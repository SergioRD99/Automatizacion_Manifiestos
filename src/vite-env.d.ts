/// <reference types="vite/client" />
// src/vite-env.d.ts
declare module 'virtual:pwa-register' {
    export function registerSW(options?: { 
      immediate?: boolean, 
      onNeedRefresh?: () => void, 
      onOfflineReady?: () => void 
    }): (reloadPage?: boolean) => Promise<void>;
  }
  