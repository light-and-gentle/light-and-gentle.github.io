/**
 * Created by mt on 2016-8-31.
 */
//需求：1.让左面部分自适应可视区的高度
(function(){
       // 1.让左面部分自适应可视区的高度
        var nav = tools.$('#nav');
        var content = tools.$('#content');
        var header = tools.$('#header');
        changeHeight();
        function changeHeight(){
            var height = tools.view().H;
            content.style.height = height - header.offsetHeight + 'px';
            nav.style.height = height - header.offsetHeight + 'px';
        }
        tools.addEvent(window,'resize',changeHeight);
        //2.拿到所需的数据
        var datas = data.files;
        //定义初始id为0
        var initialId = 0;

        //~~~~~~~~~~~~~~~~~ 3.根据数据生成结构  ~~~~~~~~~~~~~~~~~~~~~~~~~~

        var fileList = tools.$('#fileList');
        fileList.innerHTML = view.createFiles(datas,initialId);

        //~~~~~~~~~~~~~~~~~~ 5.给文件添加点击处理~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //找到所有的文件
        tools.addEvent(fileList,'click', function (ev) {
            var target = ev.target;
            if(target = tools.parents(target,'.fileItem')){
                var fileId = target.dataset.fileId;
                //渲染文件，顶部导航以及左侧树形菜单
                renderFileListMainPath(fileId);
                tools.removeClass(checkall,'checked')
            }
        });
        //~~~~~~~~~~~~~~~~ 4.创建顶部导航  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var mainPath = tools.$('.main-path')[0];
        mainPath.innerHTML = view.createMainPath(datas,initialId);
        //~~~~~~~~~~~~~~~~  5.对应左边的树形菜单  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var mainBottomLeft = tools.$('#main_bottom_left');
        mainBottomLeft.innerHTML = view.createTree(datas,-1);
        //默认状态下微云 添加tree-navclass名
        tools.addClass(tools.getTreeById("tree-title",0),"tree-nav");
        //~~~~~~~~~~~~~~~~  6.左边的树形菜单的点击处理  ~~~~~~~~~~~~~~~~~~~~~~
        var prevId = 0;//用来标记上一个点击的id
        tools.addEvent(mainBottomLeft,'click', function (ev) {
            var target = ev.target;
            if(target = tools.parents(target,'.tree-title')){
                var fileId = target.dataset.fileId;
                //渲染文件，顶部导航以及左侧树形菜单
               renderFileListMainPath(fileId);
                tools.removeClass(checkall,'checked')
            }
        });
        //~~~~~~~~~~~~~~~~  7.顶部导航的点击处理  ~~~~~~~~~~~~~~~~~~~~~~
        tools.addEvent(mainPath,'click', function (ev) {
            var target = ev.target;
            if(target = tools.parents(target,'a')){
                var fileId = target.dataset.fileId;
                //渲染文件，顶部导航以及左侧树形菜单
                renderFileListMainPath(fileId);
                tools.removeClass(checkall,'checked')
            }
        });
        //~~~~~~~~~~~~~~~~  8.全选  ~~~~~~~~~~~~~~~~~~~~~~
        var checkall = tools.$('.checkall ')[0];
        //找到所有的文件
        var item = tools.$('.item',fileList);
        //找到所有的checkbox
        var checkbox = tools.$('.checkbox',fileList);
        tools.addEvent(checkall,'click', function () {
            var isAddClass = tools.toggleClass(this,'checked');
            if(isAddClass){
                for (var i = 0; i < item.length; i++) {
                    tools.addClass(item[i],'itemHover');//所有的文件夹添加背景
                    tools.addClass(checkbox[i],'checked');//所有的选框勾选
                }
            }else{
                for (var i = 0; i < item.length; i++) {
                    tools.removeClass(item[i],'itemHover');//所有的文件夹添加背景
                    tools.removeClass(checkbox[i],'checked');//所有的选框勾选
                }
            }
            tools.addEvent(checkall,"mousedown",function (ev){//阻止冒泡，否则框选写完后连续两次或多次点击全选的时候第二次时的状态和第一次时的状态一样
                ev.stopPropagation();
            })
        });
        //~~~~~~~~~~~~~~~~  9.单选  ~~~~~~~~~~~~~~~~~~~~~~
        checkboxEvent();
        function checkboxEvent(){
            for (var i = 0; i < checkbox.length; i++) {
                checkEvent(checkbox[i])
            }
        }
        //~~~~~~~~~~~~~~~~  10.框选  ~~~~~~~~~~~~~~~~~~~~~~
        var newDiv = null;
        var disX = 0,
            disY = 0;
        var shadowTarget = null;
        var tip = null;
        tools.addEvent(document,'mousedown', function (ev) {
            var target = ev.target;
            ev.preventDefault();//阻止默认行为
            if(tools.parents(target,'.tree-menu') ||
                tools.parents(target,'.aside') ||
                tools.parents(target,'.g-btn') ||
                tools.parents(target,'.main-path') ||
                delect.delect || checkbox.length === 0
            ){//排除范围（文件夹、树形菜单、最左边列表、顶部a标签、顶部导航）
              return;
            }
            newDiv = null;
            disX = ev.clientX;
            disY = ev.clientY;
            //排除拖拽时的状态
            if( tools.parents(target,".fileItem") ){
                tools.addEvent(document,"mousemove",moveFileFn);
                tools.addEvent(document,"mouseup",upFileFn);
                shadowTarget = tools.parents(target,".item");
                return;
            }
            tools.addEvent(document,'mousemove',moveFn);
            tools.addEvent(document,'mouseup',upFn);
            //清空添加的className (文件夹，单个选框，全选)
            for( var i = 0; i < item.length; i++ ){
                tools.removeClass(item[i],"itemHover");
                tools.removeClass(checkbox[i],"checked");
            }
            tools.removeClass(checkall,'checked')
        });
        //~~~~~~~~~~~~~~~~  11. 新建 ~~~~~~~~~~~~~~~~~~~~~~
        var create = tools.$('.create')[0];
        tools.addEvent(create,'click', function (ev) {
            ev.stopPropagation();//阻止冒泡（框选后再点新建）
            if(this.isCreated){
                return;
            }
            this.isCreated = true;
            //新添加的文件夹
            var html = view.divHTML({
                id:tools.uuid()
            });
            fileList.innerHTML = html + fileList.innerHTML;
            var first = fileList.firstElementChild;
            var fileTitle = tools.$('.file-title',first)[0];
            var editor = tools.$('.editor',first)[0];
            fileTitle.style.display = 'none';
            editor.style.display = 'block';
            editor.focus();
            tools.addEvent(editor,'click', function (ev) {
                ev.stopPropagation();
            });
            tools.addEvent(editor,'mousedown',function (ev){
                ev.stopPropagation();
            });
        });
        //
        tools.addEvent(document,'mousedown', function () {
            if(create.isCreated){
                creatNewFile()
            }

        });
        tools.addEvent(document,'keydown', function (ev) {
            if(ev.keyCode === 13){
                if(create.isCreated){
                    creatNewFile()
                }
            }
        });

        //~~~~~~~~~~~~~~~~  12. 删除 ~~~~~~~~~~~~~~~~~~~~~~
        var delect = tools.$('.delect')[0];
        tools.addEvent(delect,'click', function () {
            delect.delect = true;
            var selectFile = whoSelected();
            if(selectFile.length === 0){
                tips('warn','请选择文件');
                delect.delect = false;
            }else{
                var mark = document.createElement('div');
                mark.className = 'mark';//遮罩层
                document.body.appendChild(mark);
                dialog({
                    title:'删除文件',
                    content:delectDialogBoxHtml(),
                    okFn: function () {
                        var idArr = [];
                        for (var i = 0; i < selectFile.length; i++) {
                            var obj = selectFile[i];
                            obj.remove();
                            var fileId = obj.dataset.fileId;
                            idArr.push(fileId)
                        }
                        dataConduct.batchDelect(datas,idArr);
                        delect.delect = false;
                        tools.removeClass(checkall,'checked');
                        mainBottomLeft.innerHTML = view.createTree(datas,-1);//重新渲染树形菜单
                        tips('ok','删除文件成功')
                    },
                    noFn: function () {
                        delect.delect = false;
                    }
                })

            }
        });
        //~~~~~~~~~~~~~~~~  13. 重命名 ~~~~~~~~~~~~~~~~~~~~~~
        var rename = tools.$('.rename')[0];
        tools.addEvent(rename,'click', function (ev) {
            rename.rename = true;
            var selectFile = whoSelected();
            if(selectFile.length === 0){
                tips('warn','请选择文件');
                rename.rename = false;
            }else if(selectFile.length > 1){
                tips('warn','只能对单个文件重命名');
                rename.rename = false;
            }else {
                var renameFile = selectFile[0];
                var fileTitle = tools.$('.file-title',renameFile)[0];
                var editor = tools.$('.editor',renameFile)[0];
                var mainPathLast = tools.$('span',mainPath)[0];
                var pid = mainPathLast.dataset.fileId;
                var fileId = selectFile[0].dataset.fileId;
                var renameObj = dataConduct.getDataById(datas,fileId);
                fileTitle.style.display = 'none';//span隐藏
                editor.style.display = 'block';//input显示
                editor.value = fileTitle.innerHTML;
                editor.select();//选中input中的内容
                ev.stopPropagation();   //阻止冒泡
                tools.addEvent(rename,"mousedown",function (ev){
                    ev.stopPropagation();   //阻止冒泡
                });
                tools.addEvent(editor,"mousedown",function (ev){
                    ev.stopPropagation();   //阻止冒泡
                });
                tools.addEvent(editor,"click",function (ev){
                    ev.stopPropagation();     //阻止冒泡
                });
                tools.addEvent(document,'mousedown', function () {
                    if(rename.rename){
                        var editorVal = editor.value.trim();
                        if(dataConduct.reName(datas,pid,editorVal)){
                            if(editorVal != fileTitle.innerHTML ){//名称改变且有重名
                                tips('err','文件夹名有冲突，请重新命名');
                            }
                        }else {
                            fileTitle.innerHTML = editorVal;
                            renameObj.title = editorVal ;
                            tips('ok','重命名成功');
                            mainBottomLeft.innerHTML = view.createTree(datas,-1);
                        }
                        fileTitle.style.display = 'block';
                        editor.style.display = 'none';
                        rename.rename = false;
                    }
                });
                tools.addEvent(document,'keydown', function (ev) {
                    if(ev.keyCode === 13){
                        if(rename.rename){
                            var editorVal = editor.value.trim();
                            if(dataConduct.reName(datas,pid,editorVal)){
                                if(editorVal != fileTitle.innerHTML ){
                                    tips('err','文件夹名有冲突，请重新命名');
                                }
                            }else {
                                fileTitle.innerHTML = editorVal;
                                renameObj.title = editorVal ;
                                tips('ok','重命名成功');
                                mainBottomLeft.innerHTML = view.createTree(datas,-1);
                            }
                            fileTitle.style.display = 'block';
                            editor.style.display = 'none';
                            rename.rename = false;
                        }
                    }
                })
            }
        });
        //~~~~~~~~~~~~~~~~  14. 移动到 ~~~~~~~~~~~~~~~~~~~~~~
        var remove = tools.$('.remove')[0];
        tools.addEvent(remove,'click', function () {
            var selectFile = whoSelected();
            if(selectFile.length === 0){
                tips('warn','请选择文件');
            }else{
                var mark = document.createElement('div');
                mark.className = 'mark';//遮罩层
                document.body.appendChild(mark);
                remove.isRemove = true;
                var moveId = 0;  //保存选择要移动文件的id
                var isMove = true;
                dialog({
                    title:'选择存储位置',
                    content:removeDialogBoxHtml(),
                    okFn: function () {
                        if( !isMove ){

                            //移动数据
                            //3. 3. 可以移动的文件夹下，重名的不能移动

                            var childsTitle = dataConduct.getChildrenById(datas,moveId);
                            var a = true;
                            b:for( var i = 0; i < selectFile.length; i++ ){
                                a = true;
                                var getData = dataConduct.getDataById(datas,selectFile[i].dataset.fileId);
                                //要移动的数据，不能存在于被移入的数据的子数据中
                                //判断的依据是数据的 title
                                for( var j = 0; j < childsTitle.length; j++ ){
                                    if( childsTitle[j].title == getData.title ){
                                        tips("warn","部分移动失败,重名了");
                                        a = false;
                                        // continue b;
                                        break;
                                    }
                                }

                                if( a ){
                                    getData.pid = moveId;
                                }
                            }

                            //文件区域渲染
                            var cur = tools.$(".current-path")[0].dataset.fileId;
                            fileList.innerHTML = view.createFiles(datas,cur);
                            //菜单区域渲染
                            mainBottomLeft.innerHTML = view.createTree(datas,-1);
                            //定位到某个菜单上
                            tools.addClass(tools.getTreeById("tree-title",cur),"tree-nav");
                            remove.isRemove = false;
                        }

                        return isMove;
                    },
                    noFn: function () {
                        remove.isRemove = false;
                    }
                });

                //弹框的父级
                var fullPop = tools.$('.full-pop')[0];
                //渲染弹框内树形菜单
                var dirTree = tools.$(".dirTree",fullPop)[0];
                tools.addClass(dirTree,"tree-menu-comm");
                dirTree.innerHTML = view.createTree(datas,-1);

                //填写内容
                var fileName = tools.$(".file-name",fullPop)[0];
                var fileNum = tools.$(".file-num",fullPop)[0];
                var fileMovePathTo = tools.$(".fileMovePathTo",fullPop)[0];
                var selectFirstId = selectFile[0].dataset.fileId;
                fileMovePathTo.innerHTML = '';//要移动到的位置
                //错误信息提示
                var error = tools.$(".error",fullPop)[0];

                fileName.innerHTML = dataConduct.getDataById(datas,selectFirstId).title;
                if( selectFile.length>1 ){
                    fileNum.innerHTML = '等 '+selectFile.length+' 个文件 ';
                }
                var prevId = 0;


                tools.addEvent(dirTree,"click",function (ev){
                    var target = ev.target;
                    ev.stopPropagation();
                    if( target = tools.parents(target,".tree-title") ){

                        isMove = false;
                        //点击菜单的那个id
                        var clickFileId = target.dataset.fileId;
                        tools.removeClass(tools.getTreeById("tree-title",prevId,dirTree),"tree-nav");
                        tools.addClass(target,"tree-nav");
                        prevId = clickFileId;

                        fileMovePathTo.innerHTML = removeDialogNavHtml(datas,clickFileId);
                        /*
                         1. 不能移动到被移动的这些元素的父级上
                         2. 不能移动到本身或子元素下
                         3. 可以移动的文件夹下，重名的不能移动
                         */
                        error.innerHTML = "";
                        //被移动的元素的父id
                        var firstSelectId = selectFile[0].dataset.fileId;
                        var parent = dataConduct.getParent(datas,firstSelectId);

                        if( clickFileId == parent.id ){
                            error.innerHTML = "文件已经在当前文件夹下";
                            isMove = true;
                        }

                        //2. 不能移动到本身或子孙元素下
                        //[1,2,3,4,5]

                        //selectArr 选中元素的集合
                        //clickFileId 点击树形菜单的那个菜单的id

                        for( var i = 0; i < selectFile.length; i++ ){
                            //找到选中元素的所有的子孙数据
                            var selectId = selectFile[i].dataset.fileId;
                            var childs = dataConduct.getChildsAll(datas,selectId);

                            for( var j = 0; j < childs.length; j++ ){
                                if( childs[j].id == clickFileId ){
                                    error.innerHTML = "不能移动到自身或其子元素下";
                                    isREemove = true;
                                    break;
                                }
                            }
                        }
                        setTimeout(function () {//2s后信息提示消失
                            error.innerHTML = ''
                        },2000);
                        moveId = clickFileId;
                    }
                })
                tools.addEvent(dirTree,"mousedown",function (ev){
                    ev.stopPropagation()
                })
            }
        });

        //~~~~~~~~~~~~~~~~  15. 拖拽 ~~~~~~~~~~~~~~~~~~~~~~

        var shadow = null;
        var isDrag = false;  //是否正在拖拽剪影
        var pengObj = null;  //碰上的那个元素
        function moveFileFn(ev){
            if(Math.abs(ev.clientX - disX) > 10 || Math.abs(ev.clientY - disY) > 10){
                if(!shadow){
                    shadow = view.moveFileShadow();
                    document.body.appendChild(shadow);
                    shadow.style.display = 'block';
                    tip = document.createElement('div');
                    tip.style.cssText = 'width:30px;height: 30px;position:absolute;left:0;top:0;'
                    document.body.appendChild(tip);
                }
                isDrag = true;
                tip.style.left = ev.clientX + 'px';
                tip.style.top = ev.clientY + 'px';
                shadow.style.left = ev.clientX + 5 + 'px';
                shadow.style.top = ev.clientY + 5 + 'px';
                if(!tools.hasClass(shadowTarget,"itemHover")){
                    //清空所有的
                    for (var i = 0; i < item.length; i++) {
                        tools.removeClass(item[i],"itemHover");
                        tools.removeClass(checkbox[i],"checked");
                    }
                    tools.addClass(shadowTarget,"itemHover");
                    var checkbox1 = tools.$(".checkbox",shadowTarget)[0];
                    tools.addClass(checkbox1,"checked");
                }
                //计数
                var selectArr = whoSelected();
                var sum = tools.$(".sum",shadow)[0];
                var icons = tools.$(".icons",shadow)[0];
                sum.innerHTML = selectArr.length;
                var str = '';
                var len = selectArr.length > 4 ? 4 : selectArr.length;

                for( var i = 0; i < len; i++ ){
                    str += '<i class="icon icon'+i+' filetype icon-folder"></i> '
                }
                icons.innerHTML = str;

                pengObj = null;
                //碰撞检测
                for( var i = 0; i < item.length; i++ ){
                    //items[i]
                    //要碰撞的元素是否存在于被选中的数组中
                    if(!indexOf(selectArr,item[i]) && tools.duang(tip,item[i])  ){
                        item[i].style.background = "skyblue";
                        pengObj = item[i];
                    }else{
                        item[i].style.background = "";
                    }

                }
            }
        }

        function indexOf(arr,item){
            for( var i = 0; i < arr.length; i++ ){
                if( arr[i] === item ){
                    return true;
                }
            }

            return false;
        }
        function upFileFn(){
            tools.removeEvent(document,"mousemove",moveFileFn);
            tools.removeEvent(document,"mouseup",upFileFn);
            if( shadow ){
                document.body.removeChild(shadow);
                document.body.removeChild(tip);

                shadow = null;
            }
            //如果被碰上的元素存在
            //1 .把选中的元素对应的数据的pid变成被碰上的元素对应的id
            //2
            if( pengObj ){
                var moveId = pengObj.dataset.fileId;
                var selectArr = whoSelected();

                var childsTitle = dataConduct.getChildrenById(datas,moveId);
                var a = true;
                b:for( var i = 0; i < selectArr.length; i++ ){
                    a = true;
                    var getData = dataConduct.getDataById(datas,selectArr[i].dataset.fileId);
                    //要移动的数据，不能存在于被移入的数据的子数据中
                    //判断的依据是数据的 title
                    for( var j = 0; j < childsTitle.length; j++ ){
                        if( childsTitle[j].title == getData.title ){
                            tips("warn","部分移动失败,重名了");
                            a = false;
                            // continue b;
                            break;
                        }
                    }

                    if( a ){
                        getData.pid = moveId;
                    }
                }

                //文件区域渲染
                var cur = tools.$(".current-path")[0].dataset.fileId;
                fileList.innerHTML = view.createFiles(datas,cur);
                checkboxEvent();//选框事件调用
                //菜单区域渲染
                mainBottomLeft.innerHTML = view.createTree(datas,-1);
                //定位到某个菜单上
                tools.addClass(tools.getTreeById("tree-title",cur),"tree-nav");

                pengObj = null;

            }

            isDrag  =false;
        }

        //~~~~~~~~~~~~~~~~  移动到时的弹框结构  ~~~~~~~~~~~~~~~
        function removeDialogBoxHtml(){
            var html = '<div class="mod-dirbox"><p class="dir-file">\
                <span class="file-img"></span>\
                <span class="file-name">老王</span>\
                <span class="file-num"></span>\
            </p>\
            <div class="dir-box">\
                <div class="cur-dir">\
                    <span>移动到：</span><span class="fileMovePathTo"> 111 </span>\
                </div>\
                <div class="dirTree"></div>\
            </div></div> ';

            return html;
        }
        function removeDialogNavHtml(data,id){
            //找到当前元素的对应的所有父级数据
            var parents = dataConduct.getParentById(data,id).reverse();
            var str = '';
            for(var i = 0; i < parents.length; i++){
                str += parents[i].title + '\\';
            }
            str = str.slice(0,-1);
            return str;
        }
        //~~~~~~~~~~~~~~~~  删除时的弹框结构  ~~~~~~~~~~~~~~~~~
        function delectDialogBoxHtml(){
            var html = '';
            html = '<div class="alert-inner">'
                + '<i class="ico"></i>'
                + '<p class="title">确定要删除这些文件夹吗？</p>'
                + '<p class="info">已删除的文件可以在回收站找到</p>'
                + '</div>';
            return html
        }
        //~~~~~~~~~~~~~~~~  重命名成功的函数 ~~~~~~~~~~~~~~~~~

        //~~~~~~~~~~~~~~~~  新建文件夹函数  ~~~~~~~~~~~~~~~~~
        function creatNewFile(){
            var first = fileList.firstElementChild;
            var fileTitle = tools.$('.file-title',first)[0];
            var editor = tools.$('.editor',first)[0];
            var editorVal = editor.value.trim();
            var mainPathLast = tools.$('span',mainPath)[0];
            var pid = mainPathLast.dataset.fileId;
            if(editorVal === ''){
                first.remove()
            }else if(dataConduct.reName(datas,pid,editorVal)){//重名提示
                first.remove();
                //顶部弹框
                tips('err','文件夹名有冲突，请重新命名')
            }else{//新建成功
                fileTitle.innerHTML = editorVal;
                fileTitle.style.display = 'block';
                editor.style.display = 'none';
                //添加新的数据信息
                var newFile = {
                    id:first.dataset.fileId,
                    pid:pid,
                    title:editorVal,
                    type:'file'
                };
                datas.unshift(newFile);
                tips('ok','新建文件夹成功');
                //对应当前新建文件夹所在父级对应的左侧树形菜单
                var tree = tools.getTreeById('tree-title',pid);
                var nextUl = tree.nextElementSibling;
                nextUl.innerHTML +=view.createTreeLi(datas,newFile);
                //处理有子数据的菜单
                tools.removeClass(tools.getTreeById('tree-title',pid),'tree-contro-none');
                tools.addClass(tools.getTreeById('tree-title',pid),'tree-contro');
                //全选被选中后新建文件夹成功
                tools.removeClass(checkall,'checked');
                //调用选框事件
                checkboxEvent();

            }
            create.isCreated = false;
        }

        //~~~~~~~~~~~~~~~~  提示框函数  ~~~~~~~~~~~~~~~~~
        var tipBox = tools.$('.tip-box')[0];
        var tipText = tools.$('.tip-text',tipBox)[0];
        function tips(classNames,message){
            tipBox.style.transition = 'none';
            tipBox.style.top = '-34px';
            setTimeout(function () {
                tools.addClass(tipBox,classNames);
                tipBox.style.transition = '.3s';
                tipBox.style.top = '0';
            },0);
            tipText.innerHTML = message;
            clearTimeout(tipBox.timer);
            tipBox.timer = setTimeout(function () {
                tipBox.style.top = '-34px';
                tools.removeClass(tipBox,classNames)
            },2000);

        }

        //~~~~~~~~~~~~~~~~  框选时的mousemove和mouseup函数  ~~~~~~~~~~~~~~~~~
        function moveFn(ev){
            if( Math.abs(ev.clientX - disX) > 20 || Math.abs(ev.clientY - disY) > 20){
                if(!newDiv && ev.which === 1){
                    newDiv = document.createElement('div');
                    newDiv.className = 'selectedBox';
                    newDiv.style.left = disX + 'px';
                    newDiv.style.top = disY + 'px';
                    document.body.appendChild(newDiv)
                }
                newDiv.style.width = Math.abs(ev.clientX - disX) + 'px';
                newDiv.style.height = Math.abs(ev.clientY - disY) + 'px';
                newDiv.style.left =Math.min(ev.clientX , disX) + 'px';
                newDiv.style.top = Math.min(ev.clientY , disY) + 'px';
                //框选过程中要写在当前位置否则Math.abs(ev.clientX - disX)小于20的时候会报错,因为此时没有创建新的div
                //但Math.abs(ev.clientX - disX)>20时正常
                for (var i = 0; i < item.length; i++) {
                    if(tools.duang(newDiv,item[i])){
                        tools.addClass(item[i],'itemHover');
                        tools.addClass(checkbox[i],'checked')
                    }else{
                        tools.removeClass(item[i],'itemHover');
                        tools.removeClass(checkbox[i],'checked')
                    }
                }
            }
        }
        function  upFn(){
            tools.removeEvent(document,'mousemove',moveFn);
            tools.removeEvent(document,'mouseup',upFn);
            if(newDiv)newDiv.remove();
            if(whoSelected().length===item.length){
                tools.addClass(checkall,'checked')
            }
        }

        //~~~~~~~~~~~~~~~~  被选中的文件  ~~~~~~~~~~~~~~~~~

        function whoSelected(){
            var arr = [];
            for (var i = 0; i < checkbox.length; i++) {
                var obj = checkbox[i];
                if(tools.hasClass(obj,'checked')){
                    arr.push(tools.parents(obj,'.fileItem'))
                }
            }
            return arr;
        }
        //~~~~~~~~~~~~~~~~  单个checkbox的点击处理程序  ~~~~~~~~~~~~~~~~~
        function checkEvent(obj){
            tools.addEvent(obj,'click', function (ev) {
                var isAddClass = tools.toggleClass(this,'checked');
                var objParent = obj.parentNode;
                if(isAddClass){
                    tools.addClass(objParent,'itemHover');
                    if(whoSelected().length===checkbox.length){
                        tools.addClass(checkall,'checked')
                    }
                }else{
                    tools.removeClass(objParent,'itemHover');
                    tools.removeClass(checkall,'checked')
                }
                ev.stopPropagation()
            })
        }
        //~~~~~~~~~~~~~~~~  渲染文件，顶部导航以及左侧树形菜单  ~~~~~~~~~~~~~~~~~
        function renderFileListMainPath(fileId){
            //文件区
            fileList.innerHTML =view.createFiles(datas,fileId);
            //导航部分
            mainPath.innerHTML = view.createMainPath(datas,fileId);
            var prev = tools.getTreeById("tree-title",prevId);
            var tree = tools.getTreeById("tree-title",fileId);
            tools.removeClass(prev,"tree-nav");
            tools.addClass(tree,"tree-nav");
            prevId = fileId;
            checkboxEvent();//生成的文件区域给checkbox绑定事件
        }

    }
)()
