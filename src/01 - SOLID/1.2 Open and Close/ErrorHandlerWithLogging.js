"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = __importDefault(require("./ErrorHandler"));
class ErrorHandlerWithLogging extends ErrorHandler_1.default {
    constructor(messageBox, httpClient, logger) {
        super(messageBox, httpClient);
        this._logger = logger;
    }
    ;
    wrapperError(err, publicResponse, severity) {
        return this._logger.logError(err).then(() => {
            super.wrapperError(err, publicResponse, severity);
        });
    }
}
exports.default = ErrorHandlerWithLogging;
;
