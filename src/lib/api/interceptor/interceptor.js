import axios from "axios";

export const interceptor = async (req) => {
  // if content type is formdata then this conditon will get keys from object to set formdatta
  if (req.contentType === "formdata") {
    let keys = Object.keys(req.data);
    console.log(keys);
    let formData = new FormData();
    keys.map((val, i) => {
      console.log(val, req.data[val]);
      formData.append(val, req.data[val]);
      return false;
    });
    req.data = formData;
    return await finalReq(req);
  } else {
    return await finalReq(req);
  }
};

const finalReq = async (req) => {
  try {
    let interceptorResp = await axios(req);
    console.log(interceptorResp);
    return interceptorResp;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
