/* const { URLSearchParams } = require("url");

const parmas = new URLSearchParams();

parmas.append("Books[name]", "测试")
parmas.append("Books[author]", "数据") */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sjh";

module.exports = {

  find(){
    return new Promise((reslove, reject)=>{
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        var dbo = db.db("admin");
        
        dbo.collection("books"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            reslove(result)
            db.close();
        });  
      })
    })
  }
}
