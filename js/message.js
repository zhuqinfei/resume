AV.init({
  appId: "S5zF7aoH9zRVpy3g10xXpJrC-gzGzoHsz",
  appKey: "a1StNncKamK9yDqGUPqM3KvX",
  serverURL: "https://s5zf7aoh.lc-cn-n1-shared.com"
});

const query = new AV.Query('Message');
query.find().then(function (message) {
  console.log(message)
  console.log(message[0].attributes)
  let array = message.map((item) => item.attributes)
  console.log(array)
  array.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = `${item.name}:${item.content}`
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
  })
}), function (error) {
  alert('提交失败，改天再来')
}



let myForm = document.querySelector('#postMessageFrom')
myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let name = myForm.querySelector('input[name=name]').value
  let content = myForm.querySelector('input[name=content]').value
  //创建 名字为Message的表
  var Message = AV.Object.extend('Message');
  //在表中创建一行数据
  var message = new Message();
  //数据内容是words:'Hello world!'保存
  //保存成功打印出'保存成功。'
  message.set('name', name);
  message.set('content', content);
  message.save().then((Object) => {
    //下面是可以做到无刷新留言
    let li = document.createElement('li')
    li.innerText = `${Object.attributes.name}:${Object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
    myForm.querySelector('input[name=name]').value=''
    myForm.querySelector('input[name=content]').value=''
  })
})





