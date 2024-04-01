import axios from "axios";

export const Nav = () => {
  console.log("NavCOmponent worked");
  return <></>;
};

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
  //   const baseURL = HOST_URL.url;
  //   const axiosInstance = axios.create({
  //     baseURL,
  //   });
  //   console.log(axiosInstance, 'instance');
  //   axiosInstance.interceptors.request.use(
  //     async function (req) {
  //         return req
  //   console.log(req,'before req');
  //   const refreshToken = await AsyncStorage.getItem('api-key-refresh');
  //   const token = await AsyncStorage.getItem('api-key');

  // if (refreshToken && token) {
  //   console.log(refreshToken, token, 'storagetoken');

  //   // Do something before request is sent
  //   const access = jwt_decode(token);
  //   const isExpiredAccess = dayjs.unix(access.exp).diff(dayjs()) < 1;

  //   const refresh = jwt_decode(refreshToken);
  //   const isExpiredRefresh = dayjs.unix(refresh.exp).diff(dayjs()) < 1;
  //   console.log(isExpiredAccess, isExpiredRefresh, 'tokenstatus');
  //   console.log(refresh, access, 'token');
  //   if (!isExpiredAccess) {
  //     return req;
  //   } else if (isExpiredRefresh) {
  //     console.log('refresh token expired', isExpiredRefresh);
  //     await AsyncStorage.clear();
  //     await AsyncStorage.setItem('session-expire', '1');
  //     navigation.reset({
  //       index: 0,
  //       routes: [{name: 'GetStarted'}],
  //     });
  //     navigation.navigate('GetStarted');
  //   } else {
  //     console.log('access token expired', isExpiredAccess);

  //     let refreshResponse = await refreshTokenGenerate();
  //     console.log(refreshResponse, 'refresh response');

  //     await AsyncStorage.setItem(
  //       'api-key',
  //       refreshResponse.data.accessToken,
  //     );
  //     await AsyncStorage.setItem(
  //       'api-key-refresh',
  //       refreshResponse.data.refreshToken,
  //     );
  //     req.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;

  //     console.log('interseptor run');
  //     return req;
  //   }
  // } else {
  //   console.log('else before req')
  //   return req;
  // }
  // if(users.subscriptionType === -1){
  //   setGlobalAlert(true)
  // }
  // },
  // function (error) {
  //   // Do something with request error
  //   console.log('else before req error')

  //   return Promise.reject(error);
  // },
  //   );

  //   axiosInstance.interceptors.response.use(async(res)=>{
  // console.log(res,'interceptorResp')
  //   })
  //   return {axiosInstance};
};
