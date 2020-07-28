"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class ErrorHandle {
    constructor(messageBox, httpClient) {
        this.messageBox = messageBox;
        this.httpClient = httpClient;
    }
    ;
    wrapperError(err, publicResponse, severity) {
        let error = {
            originalError: err,
            publicResponse,
            severity
        };
        this.httpClient.post('api/log', error);
        if (severity < 5) {
            this.handleWarning("Warning", publicResponse);
        }
        else {
            this.handleError("Critical Error", publicResponse);
        }
    }
    ;
    handleWarning(header, content) {
        this.messageBox.show(header, content);
    }
    ;
    handleError(header, content) {
        this.messageBox.show(header, content);
    }
    ;
}
exports.ErrorHandle = ErrorHandle;
exports.default = ErrorHandle;
