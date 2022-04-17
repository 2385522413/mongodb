#mongodb的crud
https://blog.csdn.net/lyyrhf/article/details/115469161  可以看别人的
###mongodb插入
***
db.collcetion.insert({})
批量插入：
db.collcetion.insert([])

###mongondb的查询
***
查询集合中所有的
db.collcetion.find()  
查询指定
db.collcetion.find({_id:zhangsan})  
db.collcetion.find({age:18})  
查询数量
db.collcetion.find({}).count
###mongondb的修改
***
update默认只会修改一个
db.collcetion.update({要修改的对象的标识},{修改的内容})  **注意**：这会直接替换
db.collcetion.update({要修改的对象的标识},{$set:{要添加或者修改的内容}}) 
db.collcetion.update({要修改的对象的标识},{$unset:{要删除的属性}}) 
####修改多个
db.collcetion.updateMany({要修改的对象的标识},{修改的内容})  
###mongondb的删除
db.collcetion.remove({要修改的对象的标识}}) **默认删除多个**
db.collcetion.remove({要修改的对象的标识},true}}) **删除1个**


