export default class ErrorLogger {
  private _endpoint: string = 'api/log';

  constructor(private _httpClient: any) {
  };

  logError(errorObjetct: string[]): Promise<void> {
    return this._httpClient.post(this._endpoint, errorObjetct);
  };
};