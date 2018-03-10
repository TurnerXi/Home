var Notification = window.Notification || window.mozNotification || window.webkitNotification

if (window.localStorage && !window.localStorage.getItem('notify_support')) {

  window.onload(function () {

    if (!Notification) {

      console.log("您的浏览器不支持消息推送");
      window.localStorage.setItem('notify_support', 'false')
    } else {
      //支持,但是未开启桌面提醒，进行相关操作、或提示开启
      window.Notification.requestPermission(function (status) {   
        window.localStorage.setItem('notify_support', status === 'granted' ? 'true' : 'false')
      });
    }
  })
}

export default function (title, content, icon) {
  if (!window.localStorage || window.localStorage.getItem('notify_support') !== 'true') return false

  var options = {
    body: content,
    icon: icon || "./static/sj/img/notify.ico"
  };

  //支持并且开启桌面消息提醒
  var instance = new Notification(title, options);

  instance.onclick = function () {
    instance.close();
  };

  instance.onerror = function () {};

  instance.onshow = function () {
    setTimeout(function () {
      instance.close();
    }, 3000)
  };
  instance.onclose = function () {};
}
