
type AnimationType = 'none'|'push'|'movein'|'fade'|'flip'|'reveal'|'ripple'|'curl'|'un_curl'|'suck'|'cube'
type AnimationSubType = 'from_right'|'from_left'|'from_top'|'from_bottom' 

type WindowNode = {name:string,children:WindowNode[]}

declare module 'api'{
  /**
   * Attribute
   */
  export const appId: string //应用的 ID 可以在网站控制台概览里面查看，字符串类型 比如： A6980386445546
  export const appName: string //应用在桌面显示名称，字符串类型
  export const appVersion: string //应用版本号，字符串类型 比如： 1.0.0
  export const systemType: 'ios'|'android' //系统类型，字符串类型 ios|android  
  export const systemVersion: string //手机平台的系统版本，字符串类型
  export const version: string //引擎版本信息，字符串类型
  export const deviceId: string //设备唯一标识，字符串类型
  export const deviceToken: string //iOS中用于推送的DeviceToken，如果未添加相关推送模块，或者云编译的mobileprovision证书未开启推送功能，则可能会返回空字符串，字符串类型
  export const deviceModel:string//设备型号，字符串类型 比如iPhone X的型号： iPhone10,3
  export const deviceName:string //设备名称，字符串类型 比如：“柚子”的 iPhone
  export const uiMode:string//设备类型，字符串类型 pad|phone|tv|car|desk|watch
  export const operator:string//运营商名称，若未获取到则返回none，字符串类型 比如：中国移动
  export const connectionType:'unknown'|'ethernet'|'wifi'|'2g'|'3g'|'4g'|'none'  //当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型 unknown|ethernet|wifi|2g|3g|4g|none 
  export const screenWidth:number //屏幕分辨率宽，数字类型
  export const screenHeight:number //屏幕分辨率高，数字类型
  export const winWidth:number //当前 window 宽度，数字类型
  export const winHeight:number //当前 window 高度，数字类型
  export const winName:string  //当前 window 名称 该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 root
  export const frameName:string //frame 名称，字符串类型 若当前环境为 window 中，则该属性值为空字符串
  export const frameWidth:number //frame 宽度，数字类型
  export const frameHeight:number //frame 高度
  export const safeArea:{top:number,left:number,bottom:number,right:number} //页面不被其它内容（如状态栏）遮住的区域，JSON对象 {top,left,bottom,right}
  export const appParam:Object//当应用被第三方应用打开时，传递过来的参数，字符串类型 建议通过appintent事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。
  export const statusBarAppearance:boolean //当前应用状态栏是否支持沉浸式效果，布尔类型
  export const wgtRootDir:string//widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型 注意该目录为只读，不要往该目录下面写文件
  export const fsDir:string //fs: //协议对应地真实目录，字符串类型
  export const cacheDir:string //cache://协议对应的真实目录，字符串类型
  export const boxDir:string //box://协议对应的真实目录，字符串类型
  export const debug:boolean //获取config.xml配置的debug字段的值。
  export const channel:string //渠道号，字符串类型
  export const jailbreak:boolean//设备是否越狱，布尔类型 


  /**
   * 加载第三方模块 
   * @param moduleName 
   */
  export function require(moduleName:string):any


  /**
   * 打开窗口
   */
  export function openWin(param:{
    name:string, //描述：window名字
    url:string,  //页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。
    data?:string, //页面加载的数据内容，可以为html片段或者整张html文件的数据
    headers?:{[key:string]:any}  //请求头
    singleInstance?:boolean  //设置该window是否为单例对象。若设置为单例对象，当调用closeWin方法关闭时，window将只是从屏幕移除而不会被销毁，下次再打开时将直接使用已存在的window，而不会再重新创建。 默认值：false
    useWKWebView?:boolean //是否使用WKWebView来加载页面 默认值：false
    historyGestureEnabled?:boolean //是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。 默认值：false
    syncCookie?:boolean //是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。默认值：false
    pageParam?:Object  //页面参数，新页面中可以通过 api.pageParam 获取 
    bounces?:boolean //页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。 默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false
    bgColor?:string //背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径 默认值：若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明
    scrollToTop?:boolean //当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效 默认值：false
    scrollEnabled?:boolean //页面内容超出后是否可以滚动，只支持iOS 默认值：true
    vScrollBarEnabled?:boolean // 是否显示垂直滚动条 默认值：true
    hScrollBarEnabled?:boolean //是否显示水平滚动条  默认值：true
    scaleEnabled?:boolean //页面是否可以缩放 默认值：false
    hideTopBar?:boolean //是否隐藏原生navigationBar控件，该字段只 iOS 有效
    hideBottomBar?:boolean //是否隐藏原生tabBar控件，该字段只 iOS 有效
    slidBackEnabled?:boolean //是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效 默认值：true
    slidBackType?:'full'|'edge' //当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效
    animation?:{
      type:AnimationType
      subType:AnimationSubType
    },
    progress?:{
      type:'default'|'page'  //加载进度效果类型，默认值为 default，取值范围为 default|page，为 page 时，进度效果为仿浏览器类型，固定在页面的顶部
      title:string  //type 为 default 时显示的加载框标题，字符串类型
      text:string   //type 为 default 时显示的加载框内容，字符串类型/
      color:string   //type 为 page 时进度条的颜色，默认值为 #45C01A，支持#FFF，#FFFFFF，rgb(255,255,255)，rgba(255,255,255,1.0)等格式
      height:number  //type 为 page 时进度条高度，默认值为3，数字类型
    },
    delay?:number //window 显示延迟时间，适用于将被打开的 window 中可能需要打开有耗时操作的模块时，可延迟 window 展示到屏幕的时间，保持 UI 的整体性 默认值：0
    reload?:boolean //（可选项）页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行 默认值：false
    allowEdit?:boolean //是否允许长按页面时弹出选择菜单 默认值：false 
    softInputMode?:'resize'|'pan'|'auto'  //当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用
    softInputDismissMode?:string[] //收起键盘的方式，只iOS有效。 默认值：['tap']
    softInputBarEnabled?:boolean //是否显示键盘上方的工具条。只支持iOS
    overScrollMode?:'never'|'always'|'scrolls'  //设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。默认值：never
    dragAndDrop?:boolean //是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS 默认值：false
    hideHomeIndicator?:boolean //是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS 默认值：false
    defaultRefreshHeader?:'pull'|'swip' //设置使用默认下拉刷新类型，取值范围：pull、swipe
    customRefreshHeader?:string //设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件
  }):void


  /**
   * 关闭 window 
   * @param param 
   */
  export function closeWin(param:{
    name?:string //window 名字，不传时关闭当前 window，为 root 时无效
    animation?:{
      type:AnimationType,
      subType:AnimationSubType
      duration?:number
    }
  }):void

  /**
   * 关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。 
   * @param param 
   */
  export function closeToWin(param:{
    name?:string
    animation?:{
      type:AnimationType,
      subType:AnimationSubType
      duration?:number
    }
  }):void

  /**
   * 获取当前所有打开的window。该方法为同步方法。
   */
  export function windows():WindowNode

  /**
   * 设置 window 属性 
   * @param param 
   */
  export function setWinAttr(param:{
    bounces?:boolean
    bgColor?:string //背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
    scrollToTop?:boolean //当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。只iOS有效
    scrollEnabled?:boolean //页面内容超出后是否可以滚动，只支持iOS
    vScrollBarEnabled?:boolean //是否显示垂直滚动条
    hScrollBarEnabled?:boolean //是否显示水平滚动条
    scaleEnabled?:boolean //页面是否可以缩放
    slidBackEnabled?:boolean //是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效
    hideHomeIndicator?:boolean //是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS
    softInputMode?:'resize'|'pan'|'auto'
  }):void;


}

