import {wbIndexURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default{
  getwbIndexInfo(cb){
    /**
     * 获取购物车信息
     * @param url
     *  @param cb
     * */
    Api.get(wbIndexURL,cb);
  }
}
