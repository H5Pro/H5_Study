window.API = {
    // 打开凭证对话框
    openVoucher: function(voucherId, accountingDate) {
        window.openVoucher.open('edit', new Date(accountingDate), {id: voucherId}, null);
    },

    // 固定资产弹出新增凭证对话框
    newVoucher: function (fixedAsset) {
        window.openVoucher.fixedAssetNewVoucher(fixedAsset);
    },
    // 同步公司列表菜单
    syncCompanyList: function() {
        if (currModule('voucher')) {
            window.voucherContentHeaderMenu.loadNewCompany();
        } else if (currModule('journal')) {
            window.journalContentHeaderMenu.loadNewCompany();
        }
    },

    // 成功提示框
    success: function (summary, detail) {
        window.notifier.success({
            summary: summary,
            detail: detail
        });
    },

    // 错误提示框
    error: function (summary, detail) {
        window.notifier.error({
            summary: summary,
            detail: detail
        });
    },

    // 警告提示框
    warn: function (summary, detail) {
        window.notifier.warn({
            summary: summary,
            detail: detail
        });
    },

    // 信息提示框
    info: function (summary, detail) {
        window.notifier.info({
            summary: summary,
            detail: detail
        });
    },

    // 关闭下拉菜单或消息列表
    closeDropView: function () {
        if (window.dropDownMenu.opened) {
            window.dropDownMenu.close();
        }
        if (currModule('voucher')) {
            if (window.voucherContentHeaderMenu.isShowMessageList) {
                window.voucherContentHeaderMenu.closeMessageList();
            }
        } else if (currModule('journal')) {
            if (window.journalContentHeaderMenu.isShowMessageList) {
                window.journalContentHeaderMenu.closeMessageList();
            }
        }
    },

    // 功能配置变更后刷新资源菜单
    refreshResources: function () {
        if (currModule('voucher')) {
            window.voucherSidenavMenu.initCompanyMemberAllResource();
        } else if (currModule('journal')) {
            window.journalSidenavMenu.initCompanyMemberAllResource();
        }
    },

    /** vue提供的接口 **/
    sendDropViewStatus: function (flag) {
        execVue('sendDropViewStatus(' + flag + ')');
    },
    updateContext: function (context) {
        execVue('updateContext(' + context + ')');
    }
};
function execVue(method) {
    // 只有在加载vue的iframe创建后才执行
    if(window.commonService.isNeedExecVue()) {
        var suffix = '/static/html/execVue.html';
        // 服务器版
        var src = window.location.origin.slice(0,location.origin.indexOf('.')) + 'v' + window.location.origin.slice(location.origin.indexOf('.')) + suffix;
        // 本地版
        if(location.hostname == 'localhost' || location.hostname.match('192.168')){
            src = 'http://' + location.hostname + ':8080' + suffix;
        }
        createIframe();
        loadIframe(method, src);
    }
}

function createIframe() {
    if(!window.exec_obj){
        window.exec_obj = window.document.createElement('iframe');
        window.exec_obj.name = 'execVueIframe';
        window.document.body.appendChild(window.exec_obj);
        window.exec_obj.style.display = 'none';
    }
}
var lastExecDate = new Date().valueOf();
var interval = 200;
function loadIframe(method, src) {
    var date = new Date().valueOf();
    var timeOut = lastExecDate + interval - date;
    if (timeOut > 0) {
        lastExecDate = date + timeOut;
        setTimeout(function () {
            var url = src + '?' + method + '{{}}' + new Date();
            window.exec_obj.src = url;
        } ,timeOut)
    } else {
        lastExecDate = date;
        var url = src + '?' + method + '{{}}' + new Date();
        window.exec_obj.src = url;
    }
}
// 判断当前在哪个模块下
function currModule(module) {
    return location.href.includes(module);
}
