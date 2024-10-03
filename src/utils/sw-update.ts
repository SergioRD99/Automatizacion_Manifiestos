// sw-update.ts
import { registerSW } from 'virtual:pwa-register';

export const updateSW = registerSW({
  onNeedRefresh() {
    // Notifica al usuario que hay una nueva versión disponible
    const userWantsToUpdate = window.confirm('Hay una nueva versión disponible. ¿Deseas recargar la página?');
    if (userWantsToUpdate) {
      updateSW(true); // Fuerza la recarga
    }
  },
  onOfflineReady() {
    console.log('La aplicación ahora está lista para usarse sin conexión.');
  },
});
