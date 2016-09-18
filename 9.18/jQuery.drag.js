/**
 * Created by mt on 2016-9-18.
 */
(function ($) {
   function Drag(element,options){
       this.defaults = {
           limit:false
       }
       $.extend(true,this.defaults,options);
       if($.isPlainObject(this.defaults.x) || $.isPlainObject(this.defaults.y)){
           this.defaults.limit = false;
       }
       this.element = element;
       this.target = this.defaults.moveObj && $(this.defaults.moveObj) || this.element;
       this.disx = this.disy = 0;
       this.dragStatus = 0;
       this.init()
   }
    Drag.prototype = {
        constructor:Drag,
        init: function () {
            //改变this指向
            this.element.on('mousedown', $.proxy(this.downFn,this))
        },
        downFn: function (ev) {
            this.disX = ev.pageX - this.target.offset().left;
            this.disY = ev.pageY - this.target.offset().top;
            this.dragStatus = 1;
            this.dragChangeStatusFn();
            $(document).on('mousemove', $.proxy(this.moveFn,this));
            $(document).on('mouseup', $.proxy(this.upFn,this));

            ev.preventDefault();
        },
        moveFn: function (ev) {
            this.dragStatus = 2;//拖拽时状态
            this.x = ev.pageX - this.disX;
            this.y = ev.pageY - this.disY;
            //if(this.defaults.limit){}
            this.limitFn();
            console.log(this.x);
            this.target.css({
                left:this.x,
                top:this.y
            });
            this.dragChangeStatusFn();
        },
        upFn: function () {
            $(document).off('mousemove',this.moveFn);
            $(document).off('mouseup',this.upFn);
            this.dragStatus = 3;
            this.dragChangeStatusFn();
        },
        dragChangeStatusFn: function () {
            switch( this.dragStatus ){
                case 1:
                    this.element.trigger("dragStart");
                    break;
                case 2:
                    this.element.trigger("dragMove");
                    break;
                case 3:
                    this.element.trigger("dragOver");
                    break;
            }
        },
        limitFn:function (){

            var minX = 0,maxX = 0,minY = 0,maxY = 0;

            if( this.defaults.limit ){
                //可视区宽度
                var clientW = $(window).width();
                var clientH = $(window).height();
                minX = 0;
                minY = 0;
                //元素的宽度
                maxX = clientW - this.element.outerWidth();
                maxY = clientH - this.element.outerHeight();
            }

            if( $.isPlainObject(this.defaults.x) ){
                minX = this.defaults.x.min;
                maxX = this.defaults.x.max;
            }
            if( $.isPlainObject(this.defaults.y) ){
                minY = this.defaults.y.min;
                maxY = this.defaults.y.max;
            }



            if( this.x < minX  ){
                this.x = minX;
            }
            if( this.x > maxX ){
                this.x = maxX;
            }
            if( this.y < minY  ){
                this.y = minY;
            }
            if( this.y > maxY  ){
                this.y = maxY;
            }
        }
    };

    $.fn.drag = function (options){
        new Drag(this,options);
    }
})(jQuery);
