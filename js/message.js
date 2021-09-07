AV.init({
    appId: "S5zF7aoH9zRVpy3g10xXpJrC-gzGzoHsz",
    appKey: "a1StNncKamK9yDqGUPqM3KvX",
    serverURL: "https://s5zf7aoh.lc-cn-n1-shared.com"
  });


let  myForm=document.querySelector('#postMessageFrom')
myForm.addEventListener('submit',function(e){
   e.preventDefault()
   let content=myForm.querySelector('input[name=content]').value
   //创建 名字为Message的表
   var Message = AV.Object.extend('Message');
   //在表中创建一行数据
   var message = new Message();
   //数据内容是words:'Hello world!'保存
  //保存成功打印出'保存成功。'
   message.set('content', content);
   message.save().then((message)=>{
     console.log("保存成功")
   })
})





