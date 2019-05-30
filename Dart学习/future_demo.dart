
funA() {
  print(1);
}
main(List<String> args) {
  new Future(() => 1).then((num) => {
    print(num)
  }()).then((num) => {
    print(num)
  });
  // print(enterRestaurant());
  // new Future(waitForDinner).then((str) => print(str));
  // // waitForDinner().then(print);
  // print(startChart());
  // print(playPhone());
}

String enterRestaurant() {
  return '和朋友进入一家餐厅';
}
String waitForDinner() {
  print('begin');
  return '我们的菜来了，我要开始吃饭了';
}
String startChart() {
  return '和朋友聊家常';
}
String playPhone() {
  return '等了好久，还是玩会手机吧';
}
