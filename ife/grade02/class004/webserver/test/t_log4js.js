import log4js from 'log4js'
import path from 'path'
import fs from 'fs'

const configs = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../config/log4js.json'), "utf8"));
let logConfig = Object.assign(configs);
logConfig.appenders = {};
logConfig.categories = {};

if(configs.appenderDef){
  configs.appenderDef.forEach(function(item){
    if(configs.layoutDef){
      item.layout = configs.layoutDef;
    }
    if(item.type == 'console'){
       logConfig.appenders['console'] = item;
    }else if(logConfig['isWriteFile'] === "true" && !item.type){

      let category = item['category']||'default';
      let filename = item['filename'];
      let pattern = item['pattern'];
      let filetype = "filename";
      if(!filename) return;
      item['filename'] = path.resolve((configs['baseDir']||'/logs/')+filename);
      if(!isAbsoluteDir(item['filename'])){
           throw new Error("配置节" + category + "的路径不是绝对路径:" + item['filename']);
       }
      checkAndCreateDir(path.dirname(item['filename']));
      logConfig.appenders[category] = Object.assign(item,configs['defaultAttr']);
    }
  })
}

var categories =  Object.keys(logConfig.appenders);

categories.forEach(function(item){
  let appenders = [item];
  let level = configs['baseLevel'] || "debug";
  if(item == "console"){
    logConfig.categories['default'] = {   appenders,   level  }
  }else if(categories.indexOf("console") > -1){
    appenders.unshift("console");
    logConfig.categories[item] = {   appenders,   level  }
  }
})

// 判断日志目录是否存在，不存在时创建日志目录
function checkAndCreateDir(dir){
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

// 指定的字符串是否绝对路径
function isAbsoluteDir(path){
    if(path == null)
        return false;
    var len = path.length;

    var isWindows = process.platform === 'win32';
    if(isWindows){
        if(len <= 1)
            return false;
        return path[1] == ":";
    }else{
        if(len <= 0)
            return false;
        return path[0] == "/";
    }
}

log4js.configure(logConfig);

const logDebug = log4js.getLogger('logDebug');
const logInfo = log4js.getLogger('logInfo');
const logWarn = log4js.getLogger('logWarn');
const logErr = log4js.getLogger('logErr');

const logger = {};
logger.debug = function(msg){
    logDebug.debug(msg||"");
};

logger.info = function(msg){
    logInfo.info(msg||"");
};

logger.warn = function(msg){
    logWarn.warn(msg||"");
};

logger.error = function(msg){
    logErr.error(msg||"");
};

export default logger
