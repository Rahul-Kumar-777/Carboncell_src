import {
  API_METHOD,
  HOST_URL,
} from "../../constants/constants";
import { interceptor } from "../interceptor/interceptor";

export const chartData = async (body) => {
  try {
    let response = await interceptor({
      method: API_METHOD.get,
      url: HOST_URL.urlChart,
      contentType: "application/json",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const prices = async (body) => {
  try {
    let response = await interceptor({
      method: API_METHOD.get,
      url: HOST_URL.urlPrices,
      contentType: "application/json",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
