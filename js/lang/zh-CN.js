var src = {
    "test": "测试",
    "Library": "资料库",
    "Help": "帮助",
    "Video Tutorial": "视频指南",
    "About": "关于",
    "Reference": "参考",
    "Cheatsheet": "小纸条",
    "Examples":"示例",
    "Community":"社区",
    "Favourites":"收藏",
};

var lang = function(k){
    var v = src[k];
    return typeof v !== "undefined" ? v: k;
};
    
module.exports = lang;