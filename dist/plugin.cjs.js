'use strict';

var core = require('@capacitor/core');

const CapacitorIntents = core.registerPlugin('CapacitorIntentsPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorIntentsPluginWeb()),
});

class CapacitorIntentsPluginWeb extends core.WebPlugin {
    async registerBroadcastReceiver(_options, _callback) {
        throw new Error('Feature not implemented in web.');
    }
    async unregisterBroadcastReceiver(_options) {
        throw new Error('Feature not implemented in web.');
    }
    async sendBroadcastIntent(_options) {
        throw new Error('Feature not implemented in web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorIntentsPluginWeb: CapacitorIntentsPluginWeb
});

exports.CapacitorIntents = CapacitorIntents;
//# sourceMappingURL=plugin.cjs.js.map
