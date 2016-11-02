/**
 * Created by mt on 2016-9-2.
 */
var view = (function () {
    return {
        //~~~~~~~~~~~~~~~~ 单独的数据结构  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        divHTML:function (arr){
            var divHTML = ' <div class="fileItem" data-file-id= "'+arr.id+'">'
                +'<div class="item" >'
                +'<span class="checkbox"></span>'
                +'<div class="fileImg"></div>'
                +'<p class="fileTitle">'
                +'<span class="file-title">'+arr.title+'</span>'
                +'<input class="editor"  type="text">'
                +'</p></div></div>';
            return divHTML;
        },
        createFiles:function(data,id){
            var child = dataConduct.getChildrenById(data,id);
            var str = '';
            for(var i = 0 ;i < child.length; i++){
                str += view.divHTML(child[i])
            }
            return str;
        },
        //~~~~~~~~~~~~~~~~ 顶部导航结构  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        createMainPath:function (data,id){
            //找到当前元素的对应的所有父级数据
            var parents = dataConduct.getParentById(data,id).reverse();
            var str = '';
            var zIndex = parents.length;
            for(var i = 0; i < parents.length-1; i++){
                str += '<a href="javascript:;"'
                    +' style="z-index:'+(zIndex--)+'" data-file-id="'+parents[i].id+'">'+parents[i].title+'</a>';
            }
            str += '<span class="current-path" style="z-index:'+zIndex+'" data-file-id="'+ parents[parents.length-1].id+'">'+parents[parents.length-1].title+'</span>';
            return str;
        },
        //~~~~~~~~~~~~~~~~  左边的树形菜单结构    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        createTreeLi:function (datas,tree_childs){
            var level = dataConduct.getLevel(datas,tree_childs.id);
            var hasChild = dataConduct.hasChilds(datas,tree_childs.id);
            var treeCon = hasChild ? 'tree-contro' : 'tree-contro-none';

            var html = '';
            html += '<li>'
                +'<div data-file-id="'+ tree_childs.id+'" class=" tree-title  '+treeCon +'" style="padding-left:'+level*14+'px;">'
                +'<span>'
                +'<strong class="ellipsis">' + tree_childs.title+'</strong>'
                +'<i class="ico"></i></span>'
                +'</div>';
            html += view.createTree(datas,tree_childs.id);
            html +='</li>';
            return html;
        },
        createTree:function (data,id){
            var treeChild = dataConduct.getChildrenById(data,id);
            var html = '<ul>';
            for(var i = 0; i < treeChild.length; i++){
                html += view.createTreeLi(data,treeChild[i])
            }
            html += '</ul>';
            return html;
        },
        //拖拽剪影
        moveFileShadow:function (){
            var newDiv = document.createElement("div");
            newDiv.className = 'drag-helper ui-draggable-dragging';

            var html = '<div class="icons">'
                +'<i class="icon icon0 filetype icon-folder"></i>'
                +'</div>'
                +'<span class="sum">1</span>';

            newDiv.innerHTML = html;
            return newDiv;
        }

    }
}())