import endpoints from './endpoints';
import ClassError from './excpetions';

export default class APIInterface<T, U> {
  private _BASE_URL: string = process.env.API;

  private _HEADERS: any;
  private _endpoint: string;
  private _pk: string;
  private _params: string;
  private _data: T;
  private _isSuccessful: boolean;
  private _response: U;

  constructor(endpoint: string, data?: T, params?: string, pk?: string) {
    this._endpoint = endpoints[endpoint];
    this._params = params;
    this._data = data;
    this._pk = pk;

    if (typeof window !== "undefined") {
      this._HEADERS = {
        "Content-type": "application/json",
      };

      if (localStorage.getItem('token')) {
        this._HEADERS += {
          Authorization: "Token " + localStorage.getItem("token"),
        }
      }
    }
  }

  private _createEndpointUrl(): string {
    let base = this._BASE_URL + this._endpoint["url"];
    if (this._params !== undefined) {
      return base + this._params;
    } else if (this._pk !== undefined) {
      return base + this._pk + "/";
    } else {
      return base;
    }
  }

  public async request() {
    let url: any = this._createEndpointUrl();
    let response = await fetch(url, {
      method: this._endpoint["method"],
      headers: this._HEADERS,
      body: JSON.stringify(this._data),
    })
    const result = await response.json()

    console.log(response)

    if (response.ok) {
      return result;
    }

    throw new ClassError(response.statusText, result, response.status);
  }

  public getResponseData() {
    return this._response;
  }
}
