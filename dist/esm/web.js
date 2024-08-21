import { WebPlugin } from '@capacitor/core';
export class CapacitorIntentsPluginWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map