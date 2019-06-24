const { BMP24 } = require('gd-bmp')
const jwt = require('jsonwebtoken')

function rand(min, max) {
  return Math.random() * (max - min + 1) + min | 0; //特殊的技巧，|0可以强制转换为整数
}

BMP24.prototype.drawChar = function (ch, x, y, font, from_color, to_color) {
  const index = font.fonts.indexOf(ch);
  if (index < 0) {
    return;
  }
  const fontData = font.data[index];
  const step = parseInt((to_color - from_color) / parseInt(fontData.length * font.h, 16), 16);
  let color = from_color;
  let y0 = y;
  let x0 = x;
  for (const data of fontData) {
    x0 = x;
    color += step;
    for (let b = data; b > 0; b <<= 1) {
      if (b & 0x80) {
        this.drawPoint(x0, y0, color);
      }
      x0++;
    }
    y0++;
    if ((y0 - y) >= font.h) {
      y0 = y;
      x += 8;
    }
  }
}

module.exports = {
  Capcha: function () {
    var img = new BMP24(100, 40);
    //方框
    img.drawRect(0, 0, img.w - 1, img.h - 1, 0xffffff);
    img.fillRect(0, 0, img.w - 1, img.h - 1, 0xffffff);
    // 画线
    img.drawLine(0, 0, img.w - 1, img.h - 1, 0xffffff);
    //画圆
    img.drawCircle(rand(0, 100), rand(0, 40), rand(10, 40), rand(0, 0xffffff));

    //画曲线
    var w = img.w / 2;
    var h = img.h;
    var color = rand(0, 0xffffff);
    var y1 = rand(-5, 5); //Y轴位置调整
    var w2 = rand(10, 15); //数值越小频率越高
    var h3 = rand(4, 6); //数值越小幅度越大
    var bl = rand(1, 2);
    for (var i = -w; i < w; i += 0.1) {
      var y = Math.floor(h / h3 * Math.sin(i / w2) + h / 2 + y1);
      var x = Math.floor(i + w);
      for (var j = 0; j < bl; j++) {
        img.drawPoint(x, y + j, color);
      }
    }

    var p = "ABCDEFGHKMNPQRSTUVWXYZ3456789";
    var str = '';
    for (var i = 0; i < 5; i++) {
      str += p.charAt(Math.random() * p.length | 0);
    }

    var x = 5,
      y = 8;
    var f = BMP24.font16x32;
    for (var i = 0; i < str.length; i++) {
      y = 8 + rand(-5, 5);
      img.drawChar(str[i], x, y, f, 0, rand(0, 0xffffff));
      x += f.w + rand(2, 5);
    }
    return {
      img,
      code: str
    }
  },
  jwt:jwt
}
