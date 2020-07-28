import ErrorHandler, { InterfaceErrorHandler } from './ErrorHandler';
import ErrorLogger from './ErrorLogger';

interface InterfaceErrorHandlerWithLogging extends InterfaceErrorHandler{
  logger: ErrorLogger
}

export default class ErrorHandlerWithLogging<InterfaceErrorHandlerWithLogging> extends ErrorHandler {
  private _logger: ErrorLogger;

  constructor(messageBox, httpClient, logger: ErrorLogger) {
    super(messageBox, httpClient);
    this._logger = logger;
  };

  wrapperError(err, publicResponse, severity) {
    return this._logger.logError(err).then(() => {
      super.wrapperError(err, publicResponse, severity)
    });
  }
};