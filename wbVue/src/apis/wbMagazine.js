import {wbMagazineURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default{
  getwbMagazineInfo(cb){
    Api.get(wbMagazineURL,cb);
  }
}
