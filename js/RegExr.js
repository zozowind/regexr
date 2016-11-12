"use strict";

var RegExr = window.RegExrShared = {};

window.ES6Promise = require('es6-promise');
require('classlist-polyfill');
require('./third-party/history.adapter.native.js');
require('./third-party/history.js');

// Import some classes into a shared object, for use in the index.template.js
var Utils = require('./utils/Utils');
window.$ = RegExrShared.Utils = Utils;
var I18n = require('./I18n');
if (!window.i18n){
    window.i18n = new I18n({lang:"zh-CN"});
}
// console.log(i18n.__("test")+'\n');
// console.log(i18n.__("english")+'\n');
// console.log(i18n.__("中文")+'\n');
var ServerModel = require('./net/ServerModel');
RegExrShared.ServerModel = ServerModel;

RegExrShared.BrowserHistory = require('./BrowserHistory');
RegExrShared.List = require('./controls/List');
RegExrShared.DocView = require('./views/DocView');
RegExrShared.RegExLexer = require('./RegExLexer');
RegExrShared.SubstLexer = require('./SubstLexer');
RegExrShared.Docs = require('./utils/Docs');
RegExrShared.LibView = require('./views/LibView');
RegExrShared.ExpressionModel = require('./net/ExpressionModel');
RegExrShared.Settings = require('./Settings');
RegExrShared.TransitionEvents = require('./events/TransitionEvents');
