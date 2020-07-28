"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorLogger {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this._endpoint = 'api/log';
    }
    ;
    logError(errorObjetct) {
        return this._httpClient.post(this._endpoint, errorObjetct);
    }
    ;
}
exports.default = ErrorLogger;
;
