import {wbCartsURL} from "../common/AjaxUrls"
import Api from  "../common/Api"

export  default {
  getwbCartsInfo(cb){
      Api.get(wbCartsURL,cb)
  }
}
