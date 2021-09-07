AV.init({
    appId: "S5zF7aoH9zRVpy3g10xXpJrC-gzGzoHsz",
    appKey: "a1StNncKamK9yDqGUPqM3KvX",
    serverURL: "https://s5zf7aoh.lc-cn-n1-shared.com"
  });
console.log('运行到这里没有报错')


const TestObject = AV.Object.extend('TestObject');
const testObject = new TestObject();
testObject.set('words', 'Hello world!');
testObject.save().then((testObject) => {
  console.log('保存成功。')
})

