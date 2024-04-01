/* localhost url */
export class HOST_URL {
  static urlChart = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  static urlPrices = "https://api.coindesk.com/v1/bpi/currentprice.json";
}

export class API_METHOD {
  static get = "GET";
  static post = "POST";
  static delete = "DELETE";
  static put = "PUT";
}

/* Console enable/disable */
export class CONSOLE_MODE {
  // static mode = "development";
  static mode = "production";
}
