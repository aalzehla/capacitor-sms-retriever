import { WebPlugin } from '@capacitor/core';
import type { CapacitorSmsRetrieverPlugin, StartSuccessResponse } from './definitions';
export declare class CapacitorSmsRetrieverWeb extends WebPlugin implements CapacitorSmsRetrieverPlugin {
    startListening(): Promise<StartSuccessResponse>;
    stopListening(): Promise<void>;
    present(): Promise<{
        code: string;
    }>;
}
