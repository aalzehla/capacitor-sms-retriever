'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorSmsRetriever = core.registerPlugin('CapacitorSmsRetriever', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorSmsRetrieverWeb()),
});

class CapacitorSmsRetrieverWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorSmsRetrieverWeb: CapacitorSmsRetrieverWeb
});

exports.CapacitorSmsRetriever = CapacitorSmsRetriever;
//# sourceMappingURL=plugin.cjs.js.map
