import {wbSharedURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default {
      getwbSharedInfo(cb){
        Api.get(wbSharedURL,cb);
      }
}
