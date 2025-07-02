import { registerPlugin } from '@capacitor/core';
const CapacitorSmsRetriever = registerPlugin('CapacitorSmsRetriever', {
    web: () => import('./web').then(m => new m.CapacitorSmsRetrieverWeb()),
});
export * from './definitions';
export { CapacitorSmsRetriever };
//# sourceMappingURL=index.js.map