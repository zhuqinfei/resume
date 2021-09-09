!function () {
  var view = document.querySelector('section.message')

  var model = {
    initAV: function () {
      //数据库初始化
      AV.init({
        appId: "S5zF7aoH9zRVpy3g10xXpJrC-gzGzoHsz",
        appKey: "a1StNncKamK9yDqGUPqM3KvX",
        serverURL: "https://s5zf7aoh.lc-cn-n1-shared.com"
      });
    },
    //从数据库中获取数据
    fetch: function () {
      const query = new AV.Query('Message');
      return query.find()    //返回promise对象
    },
    //在数据库中创建数据并更新保存数据
    save: function (name, content) {
      var Message = AV.Object.extend('Message');
      var message = new Message();
      message.set('name', name);
      message.set('content', content);
      return message.save()
    }
  }

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.model.initAV()
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessageFrom')
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch().then((message) => {
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
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      console.log(this)
      this.model.save(name, content).then((Object) => {
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

  controller.init(view, model)
  
}.call()







