!function () {
  var view = document.querySelector('section.message')

  var controller = {
    view: null,
    messageList: null,
    init: function (view) {
      this.view = view
      this.initAV()
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessageFrom')
      this.loadMessages()
      this.bindEvents()
    },
    initAV: function () {
      AV.init({
        appId: "S5zF7aoH9zRVpy3g10xXpJrC-gzGzoHsz",
        appKey: "a1StNncKamK9yDqGUPqM3KvX",
        serverURL: "https://s5zf7aoh.lc-cn-n1-shared.com"
      });
    },
    loadMessages:function () {
      const query = new AV.Query('Message');//文档中用到的代码
      query.find().then((message) => { //文档中获取对象方法
        let array = message.map((item) => item.attributes)
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerText = `${item.name}:${item.content}`
          this.messageList.appendChild(li)
        })
      }), function (error) {
        alert('提交失败，改天再来')
      }
    },
    bindEvents: function () {
      this.form.addEventListener('submit', function (e) {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = form
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
        myForm.querySelector('input[name=name]').value = ''
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view)
}.call()







