import { registerSW } from 'virtual:pwa-register';

export const updateSW = registerSW({
  onNeedRefresh() {
    const userWantsToUpdate = window.confirm('Hay una nueva versión disponible. ¿Deseas recargar la página?');
    if (userWantsToUpdate) {
      window.location.reload(); // Recarga la página para aplicar la nueva versión
    } else {
      // Mostrar notificación cuando la aplicación no esté visible
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.ready.then(swReg => {
          if (document.visibilityState === 'hidden' || document.hidden) {
            // Si la app no está visible, enviamos una notificación
            showUpdateNotification(swReg);
          }
        });
      }
    }
  },
  onOfflineReady() {
    console.log('La aplicación ahora está lista para usarse sin conexión.');
  },
});

// Función para mostrar la notificación de actualización
function showUpdateNotification(swReg: ServiceWorkerRegistration) {
  const options = {
    body: 'Hay una nueva versión disponible. Abre la aplicación para actualizar.',
    icon: '/path/to/icon.png', // Reemplaza con el icono adecuado
    badge: '/path/to/badge.png', // Reemplaza con el badge adecuado
    actions: [
      { action: 'update', title: 'Actualizar' },
      { action: 'dismiss', title: 'Ignorar' }
    ]
  } as NotificationOptions & { actions: { action: string; title: string }[] };      

  swReg.showNotification('Nueva actualización disponible', options);
}
