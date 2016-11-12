var langs = {
    "en-US": require("./lang/en-US"),
    "zh-CN": require("./lang/zh-CN"),
};

var I18n = function(config){
    this.setLang(config.lang);
};

var p = I18n.prototype;

p.setLang = function(lang){
    this.lang = lang;
    if (langs[this.lang]){
        this.__ = langs[this.lang];
    }else{
        this.__ = function(k){return k;};
    }
};

module.exports = I18n;