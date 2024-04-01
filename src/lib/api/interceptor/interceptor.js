import axios from "axios";

export const interceptor = async (req) => {
  console.log(req, "insideAxios");
  if (req.contentType === "formdata") {
    console.log("if");

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
    console.log("else");
    return await finalReq(req);
  }
};

const finalReq = async (req) => {
  console.log(req, "insidereq");
  try {
    let interceptorResp = await axios(req);
    console.log(interceptorResp);
    return interceptorResp;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
