import { WebPlugin } from '@capacitor/core';
export class CapacitorSmsRetrieverWeb extends WebPlugin {
    async startListening() {
        console.warn('Capacitor SMS Retriever not available on web');
        return Promise.resolve({ body: 'Capacitor SMS Retriever not available on web' });
    }
    async stopListening() {
        return Promise.reject(new Error('Capacitor SMS Retriever not available on web'));
    }
    async present() {
        return Promise.reject(new Error('Capacitor SMS Retriever not available on web'));
    }
}
//# sourceMappingURL=web.js.map