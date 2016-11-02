var tools = {
	$: function (selector, context) {
		var firstChar = selector.charAt(0);
		context = context || document;
		if (firstChar === "#") {
			return document.getElementById(selector.substring(1));
		} else if (firstChar === ".") {
			return context.getElementsByClassName(selector.substring(1));
		} else {
			return context.getElementsByTagName(selector);
		}
	},

	//~~~~~~~~~~~~  获取样式  ~~~~~~~~~~~~~~~~~~~~~~~~~
	getStyle: function (obj, attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj)[attr];
			s
		}
	},
	//~~~~~~~~~~~~  获取可视区的宽高  ~~~~~~~~~~~~~~~~~~~~~~~~~
	view: function () {
		return {
			W: document.documentElement.clientWidth,
			H: document.documentElement.clientHeight
		}
	},
	//~~~~~~~~~~~~  判断元素身上是否有class  ~~~~~~~~~~~~~~~~~~~~~~~~~
	hasClass: function (element, classNames) {
		var classAll = element.className.split(" ");  //"blue red"
		for (var i = 0; i < classAll.length; i++) {
			if (classAll[i] === classNames) {
				return true;
			}
		}
		return false;
	},
	//~~~~~~~~~~~~  删除元素身上的class  ~~~~~~~~~~~~~~~~~~~~~~~~~
	removeClass: function (element, classNames) {
		if (tools.hasClass(element, classNames)) {  //如果有这个class，就删除
			var classAll = element.className.split(" "); // ["blue","red"]
			for (var i = 0; i < classAll.length; i++) {
				if (classAll[i] === classNames) {
					classAll.splice(i, 1);
					i--;
				}
			}
			//如果这个数组为kong，那么就删除标签上的class这个属性
			if (classAll.length === 0) {
				element.removeAttribute("class");
			} else {
				element.className = classAll.join(" ");
			}


		}
	},
	//~~~~~~~~~~~~  给元素添加class  ~~~~~~~~~~~~~~~~~~~~~~~

	addClass: function (element, classNames) {
		var classAll = element.className;  // ""    "blue"
		if (!tools.hasClass(element, classNames)) {
			classAll += " " + classNames;
		}
		element.className = classAll.trim();

	},
	//~~~~~~~~~~~~  有指定的class就删除，没有指定的class就添加  ~~~~~~~~~~~~~~~~~~~~~~~
	/*toggleClass(element,classNames);
	 element：元素
	 classNames：指定的class 类型：String

	 返回值：boolean值
	 true：代表已经添加上了指定的class
	 false：代表已经删除了指定的class
	 */
	toggleClass: function (element, classNames) {
		if (tools.hasClass(element, classNames)) {
			tools.removeClass(element, classNames);
			return false;
		} else {
			tools.addClass(element, classNames);
			return true;
		}
	},
	addEvent: function (obj, evName, fnName) {
		obj.addEventListener(evName, fnName, false);
	},
	removeEvent: function (obj, evName, fnName) {
		obj.removeEventListener(evName, fnName, false);
	},
	parents: function (element, selector) {
		var first = selector.charAt();
		if (first === "#") {
			selector = selector.slice(1);
			//排除element为document父元素节点，用 nodeType 判断
			while (element.nodeType != 9 && element.id != selector) {  //当前这个元素的id不为box
				element = element.parentNode;
			}
		} else if (first === ".") {
			selector = selector.slice(1);
			while (element.nodeType != 9 && !tools.hasClass(element, selector)) {  //当前这个元素的id不为box
				element = element.parentNode;
			}
		} else {
			while (element.nodeType != 9 && element.nodeName.toLowerCase() != selector) {  //当前这个元素的id不为box
				element = element.parentNode;
			}
		}
		return element.nodeType === 9 ? null : element;
	},
	getTreeById: function (classNams,id,parents) {
		var  classElement = tools.$("."+classNams,parents);
		for (var i = 0; i < classElement.length; i++) {
			if(classElement[i].dataset.fileId == id){
				return classElement[i];
			}
		}
		return null;
	},

	getRect:function (obj){
		return obj.getBoundingClientRect();
	},
	duang: function (obj1,obj2){
		var obj1Info = tools.getRect(obj1);
		var obj2Info = tools.getRect(obj2);

		//obj1的上下左右

		var obj1L = obj1Info.left;
		var obj1R = obj1Info.right;
		var obj1T = obj1Info.top;
		var obj1B = obj1Info.bottom;

		//obj2的上下左右
		var obj2L = obj2Info.left;
		var obj2R = obj2Info.right;
		var obj2T = obj2Info.top;
		var obj2B = obj2Info.bottom;

		//排除掉没碰上的区域

		if( obj1R < obj2L || obj1L > obj2R || obj1B < obj2T || obj1T > obj2B){
			return false;
		}else{
			return true;
		}
	},
	uuid:function (){
		return new Date().getTime();
	}
}