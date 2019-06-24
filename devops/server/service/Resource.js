const DB = require('../lib/db')

class ResourceService{
  init(){
    DB.getConnect().then((db) => {
        db.collection("ADMIN_RESOURCE").insertMany(
          [{ 'ID': 1,'NAME': '首页', 'PATH': '/' , 'PARENT': ''},
            { 'ID': 2,'NAME': '商品管理', 'PATH': '/products' , 'PARENT': '1'},
            { 'ID': 3,'NAME': '关于我们', 'PATH': '/about' , 'PARENT': '1'},
            { 'ID': 4,'NAME': '商品详情', 'PATH': '/products/:id' , 'PARENT': '2'},
            { 'ID': 5,'NAME': '新增商品', 'PATH': '/products/add' , 'PARENT': '2'},
          ], function (err) {
          // console.log('12313', err)
        });
    }).catch((err) => {
      console.error(err)
    })
  }
}

module.exports = ResourceService;
