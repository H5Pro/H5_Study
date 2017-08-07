/**
 * Created by fjl on 2017/6/14.
 */

//js工具类
var jTools = {
    //元素操作
    Element:{},
    //字符串操作(操作或返回字符串)
    StrTools:{}
};

/*
 * 找到top标签名为tagName的直接子元素(并且是sub的祖先元素),
 * 返回该元素在top中所有标签名为tagName直接子元素中的位置
 * */
jTools.Element.indexParentAndChild = function(sub,tagName,top){
    var index = -1;
    if(!sub || !tagName || !top){
        return index;
    }
    var target = jTools.Element.findParentAndChild(sub,tagName,top);
    index = jTools.Element.indexOfDirectChildrenByTagName(target,top);
    return index;
}

jTools.Element.indexOfDirectChildrenByTagName = function(target,sup){

    var index =-1;
    if(!target || !sup){
        return index;
    }

    var arr = jTools.Element.directChildrenByTagName(sup,target.tagName);

    for(o in arr){
        if(arr[o] == target){
            index = o;
            break;
        }
    }

    return index;

}

jTools.Element.directChildrenByTagName = function(sup,tagName){
    var children = [];
    if(!sup && !tagName){
        return children;
    }

    tagName = tagName.toLocaleUpperCase();
    var arr = sup.childNodes;
    arr.forEach(function(item){
        if(item.tagName == tagName){
            children.push(item);
        }
    });

    return children;
}

/*
 * 找到top标签名为tagName的直接子元素,并且是sub的祖先元素
 * */
jTools.Element.findParentAndChild = function(sub,tagName,top){
    if(!sub || !tagName || !top){
        return null;
    }
    var parent = jTools.Element.findParent(sub,tagName);
    while (parent && parent.parentNode != top){
        parent = jTools.Element.findParent(parent,tagName);
    }
    return parent;
}

/*
 * 找到sub的直接父容器,他的标签名为tagName
 * */
jTools.Element.findParent = function(sub,tagName){
    if(!sub || !tagName){
        return null;
    }
    var parent = sub;
    tagName = tagName.toLocaleUpperCase();
    while (parent && parent.tagName != tagName){
        parent = parent.parentNode;
    }
    return parent;
}




//将参数对象解析为url
jTools.StrTools.appendUrl = function(params) {
    var url = '';
    for (var o in params) {
        var  str = o + "=" + params[o];
        if (url === '')
            url += str;
        else
            url += ("&" + str);
    }
    return url;
}



/*
 * 从url中提取参数对象
 * */
jTools.StrTools.getParams = function(urlStr) {
    var params = {};

    var paramStr = urlStr.slice(urlStr.indexOf('?') + 1);
    var paramArr = paramStr.split('&');
    paramArr.forEach(function (item) {
        var arr = item.split('=');
        var key = arr.length > 0 ? arr[0] : null;
        var value = arr.length > 1 ? arr[1] : '';
        if (key) {

            params[key] = value;
        }
    });

    return params;
}
