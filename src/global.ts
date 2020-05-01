import { ApiCloud } from "../types/apicloud";


declare global{
  interface Window{
    api:ApiCloud.IApi
    
  }
}
