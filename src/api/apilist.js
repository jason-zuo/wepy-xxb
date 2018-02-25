import {
    wxRequest
} from './api';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://educhain.91xuexibao.com/'
/**
 * 获取用户code的接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getUserCode = (params) => wxRequest(params, apiMall + 'wxTinyProgram/api/loginByCode');


const updateUser = (params) => wxRequest(params, apiMall + 'user/api/update');


const getsetcourse = (params, id) => wxRequest(params, apiMall + 'course/api/info/' + params.id);


const getinfocourse = (params, id) => wxRequest(params, apiMall + ( 'course/api/single/info/' + params.id ) ,"POST");

// 支付订单接口
const getOrder = (params, id) => wxRequest(params, apiMall + ('pay/api/order/' + params.id) , "POST") ;


module.exports = {
    getUserCode ,
    updateUser  ,
    getsetcourse ,
    getinfocourse ,
    getOrder

}
