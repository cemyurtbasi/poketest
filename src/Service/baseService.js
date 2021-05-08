import axios from "axios";

export default class baseService {
  constructor() {
    this.apiURL = "https://pokeapi.co/api/v2/";
  }

  getData(schemaName, funcName, data) {
    var url =
      this.apiURL + schemaName + "/" + funcName + "?" + (data ? data : "");

    return this.callServiceMethod(url, data, "GET");
  }

  callServiceMethod(url, data, method) {
    const token = global.token;

    var headers = {
      Authorization: token ? "Bearer " + token : "",
    };

    return this.callAnyServiceMethod(url, data, method, headers);
  }

  async callAnyServiceMethod(url, data, method, headers) {
    var authOptions = {
      method,
      url,
      data,
      headers,
    };

    return await axios(authOptions)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
