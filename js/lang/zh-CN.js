var src = {
    "test": "测试"
};

var lang = function(k){
    var v = src[k];
    return typeof v !== "undefined" ? v: k;
};
    
module.exports = lang;