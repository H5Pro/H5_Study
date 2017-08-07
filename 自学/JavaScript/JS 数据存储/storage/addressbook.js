//查找数据
function find(){
    var search_phone = document.getElementById("search_phone").value;
    var name = localStorage.getItem(search_phone);
    var find_result = document.getElementById("find_result");
    find_result.innerHTML = search_phone + "的机主是：" + name;
}


//保存数据
function save(){
    var contact = new Object;
    contact.user_name = document.getElementById("user_name").value;
    contact.mobilephone = document.getElementById("mobilephone").value;
    contact.company = document.getElementById("company").value;
    var str = JSON.stringify(contact);
    localStorage.setItem(contact.mobilephone,str);
    console.log(JSON.parse(localStorage.getItem(contact.mobilephone)));
}
