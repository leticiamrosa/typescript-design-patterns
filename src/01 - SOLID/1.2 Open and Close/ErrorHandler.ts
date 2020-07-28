export interface InterfaceErrorHandler  {
  messageBox: string;
  httpClient: any;
};

export class ErrorHandle<InterfaceErrorHandler> {

  private messageBox: InterfaceErrorHandler;
  private httpClient: InterfaceErrorHandler;

  constructor(messageBox, httpClient) {
    this.messageBox = messageBox;
    this.httpClient = httpClient;
  };

  wrapperError(err, publicResponse, severity) {
    let error = {
      originalError: err,
      publicResponse, 
      severity
  };

  this.httpClient.post('api/log', error);

  if  (severity < 5) {
      this.handleWarning("Warning", publicResponse);
  }
    else {
      this.handleError("Critical Error", publicResponse);
    }
  };

  private handleWarning(header, content) {
    this.messageBox.show(header, content);
  };

  private handleError(header, content){
    this.messageBox.show(header, content);
  };

}

export default ErrorHandle;