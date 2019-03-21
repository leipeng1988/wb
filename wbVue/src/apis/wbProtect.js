import {wbProtectURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default {
  getwbProtectInfo(cb){
    Api.get(wbProtectURL,cb);
  }
}
