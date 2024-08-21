import { WebPlugin } from '@capacitor/core';
import type { CapacitorIntentsPlugin } from './definitions';
export declare class CapacitorIntentsPluginWeb extends WebPlugin implements CapacitorIntentsPlugin {
    registerBroadcastReceiver(_options: {
        filters: string[];
    }, _callback: (data: {
        [key: string]: any;
    }) => void): Promise<string>;
    unregisterBroadcastReceiver(_options: {
        id: string;
    }): Promise<void>;
    sendBroadcastIntent(_options: {
        action: string;
        value: {
            [key: string]: any;
        };
    }): Promise<void>;
}
