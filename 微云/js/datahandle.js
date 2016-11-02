/**
 * Created by mt on 2016-8-31.
 */
//当前这个文件用来存放有关数据处理的函数
var dataConduct = (function () {
    return {
        //通过id找到对应数据下的所有子数据
        getChildrenById: function (data,id) {
            var arr = [];
            for(var i = 0; i < data.length; i++){
                if(data[i].pid == id){
                    arr.push(data[i])
                }
            }
            return arr;
        },
        //通过id找到包括他自身在内的所有父级
        getParentById: function (data,id) {
            var arr = [];
            for(var i = 0; i < data.length; i++){
                if(data[i].id == id){
                    arr.push(data[i]);
                    arr = arr.concat(dataConduct.getParentById(data,data[i].pid))
                }
            }
            return arr;
        },
        //找到指定的id是第几层的
        getLevel: function (data,id) {
            return dataConduct.getParentById(data,id).length
        },
        //判断指定的id下是否子数据
        hasChilds: function (data,id) {
           return !!dataConduct.getChildrenById(data,id).length;
        },
        //重名
        reName:function(data,pid,title){
            var childs = dataConduct.getChildrenById(data,pid);
            for (var i = 0; i < childs.length; i++) {
                var obj = childs[i];
                if(obj.title === title){
                    return true;
                }
            }
            return false;
        },
        //删除id对应的数据
        deleteDataById:function (datas,idArr){
            for( var i = 0; i < datas.length; i++ ){
                for( var j = 0; j < idArr.length; j++ ){
                    if( datas[i].id == idArr[j] ){
                        datas.splice(i,1);
                        i--;
                        break;
                    }
                }
            }
        },
        //作用:找到指定id的所有的子孙数据
        getChildsAll:function (datas,id){
            //通过循环数据，找到指定id的那条数据
            var arr = [];
            for( var i = 0; i < datas.length; i++ ){
                if( datas[i].id == id ){
                    arr.push(datas[i]);
                    var childs = dataConduct.getChildrenById(datas,datas[i].id);

                    for( var j = 0; j < childs.length; j++ ){
                        arr = arr.concat(dataConduct.getChildsAll(datas,childs[j].id));
                    }
                }
            }

            return arr;
        },
        //批量删除指定id下面的所有的子级  [1,2,3,4]
        //idArr 是一个数组，指定了要删除的id
        batchDelect:function (datas,idArr){
            for( var i = 0; i < idArr.length; i++ ){
                var childsAll = dataConduct.getChildsAll(datas,idArr[i]);
                for( var j = 0; j < childsAll.length; j++ ){
                    for( var k = 0; k < datas.length; k++ ){
                        if( datas[k].id == childsAll[j].id ){
                            datas.splice(k,1);
                            break;
                        }
                    }
                }

            }
        },
        getDataById:function (datas,id){
            for( var i = 0; i < datas.length; i++ ){
                if( datas[i].id == id ){
                    return datas[i];
                }
            }

            return null;
        },
        getParent:function (datas,id){
            var parents = dataConduct.getParentById(datas,id);
            return parents[1];
        }
    }

})()
