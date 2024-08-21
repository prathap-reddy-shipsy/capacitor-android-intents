import { registerPlugin } from '@capacitor/core';
const CapacitorIntents = registerPlugin('CapacitorIntentsPlugin', {
    web: () => import('./web').then((m) => new m.CapacitorIntentsPluginWeb()),
});
export * from './definitions';
export { CapacitorIntents };
//# sourceMappingURL=index.js.map