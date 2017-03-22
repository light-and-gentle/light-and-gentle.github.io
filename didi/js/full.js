
//    为移动设备添加 viewport
/*     content 参数解释：
        width  　　　　 viewport 宽度(数值/device-width)
        height            viewport 高度(数值/device-height)
        initial-scale  初始缩放比例
        maximum-scale  最大缩放比例
        minimum-scale  最小缩放比例
        user-scalable  是否允许用户缩放(yes/no)
*/
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth/640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    var version = parseFloat(RegExp.$1);
// andriod 2.3
    if(version>2.3){
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
// andriod 2.3以下
    }else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
// 其他
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}