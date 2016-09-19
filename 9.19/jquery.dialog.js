/**
 * Created by mt on 2016-9-18.
 */
(function ($) {
    function Dialog(element,options){

        options = options || {};

       this.defaults = {
            title:options.title || '这是一个弹框',
            content:options.content || '这是一个弹框,请写内容',
            okFn:options.okFn || function(){},
            noFn:options.noFn || function(){}
        };
        $.extend(true,this.defaults,options);
        this.element = element;
       this.init()
    }
    Dialog.prototype = {
        constructor:Dialog,
        fullDiv:null,
        html:function (){
            var newDiv = document.createElement("div");
            var mask = document.createElement('div');
            mask.className = 'mark';
            document.body.appendChild(mask);
            var html  ='<h3>\
            <p class="title">'+this.defaults.title+'</p>\
            <a href="javascript:void(0);" class="close" title="关闭">×</a>\
        </h3>\
        <div class="content">\
            1111\
        </div>\
        <div class="pop-btns">\
            <span class="error"></span>\
            <a href="javascript:void(0)" class="confirm">确定</a>\
            <a href="javascript:void(0)" class="cancel">取消</a>\
        </div>';
            newDiv.className = 'full-pop';
            newDiv.innerHTML = html;
            return newDiv;
        },
        init:function (){
            var fullDiv = this.html();
            document.body.appendChild(fullDiv);
            var content = fullDiv.getElementsByClassName("content")[0];
            content.innerHTML = this.defaults.content;
            this.fullDiv = fullDiv;
            this.addEvent();
            var h3 = fullDiv.getElementsByTagName("h3")[0];
        },
        addEvent:function (){
            var mark = $('.mark')[0];
            var fullPop = $('.full-pop')[0];
            //关闭
            var closes = $(".close",this.fullDiv)[0];
            closes.onclick = function (){
                document.body.removeChild(fullPop);
                mark.remove()
            };

            //确定
            var confirm = $(".confirm",this.fullDiv)[0];
            var delect = $('.delect')[0];
            confirm.onclick = function (){
                document.body.removeChild(fullPop);
                mark.remove()
            };
            //取消
            var cancel = $(".cancel",this.fullDiv)[0];
            cancel.onclick = function (){
                document.body.removeChild(fullPop);
                mark.remove();
            };
        }
    };
    $.fn.dialog = function (options) {
        new Dialog(this,options);
        var obj1 = {
            limit:true,
            moveObj:'.full-pop'
        };
        $('.full-pop h3').drag(obj1)
    }
})(jQuery);
