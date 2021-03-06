/*Created by fjl on 2017/11/7*/
const messages = [
  {
    "id": 9,
    "type": 1,
    "title": "10月第1号支出凭证",
    "priority": 1,
    "description": "fjl创建了第1号支出-销售收入退回凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508832528000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":1,\"id\":12399}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 10,
    "type": 1,
    "title": "10月第2号支出凭证",
    "priority": 1,
    "description": "fjl创建了第2号支出-其他支出凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508832952000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":2,\"id\":12400}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 11,
    "type": 1,
    "title": "10月第3号支出凭证",
    "priority": 1,
    "description": "fjl创建了第3号支出-其他支出凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508832965000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":3,\"id\":12401}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 12,
    "type": 1,
    "title": "10月第4号支出凭证",
    "priority": 1,
    "description": "fjl创建了第4号支出-其他支出凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508832995000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":4,\"id\":12402}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 13,
    "type": 1,
    "title": "10月第5号收入凭证",
    "priority": 1,
    "description": "fjl创建了第5号收入-其他收入凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508833046000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":5,\"id\":12403}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 14,
    "type": 1,
    "title": "10月第6号收入凭证",
    "priority": 1,
    "description": "fjl创建了第6号收入-其他收入凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508833111000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":6,\"id\":12404}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 15,
    "type": 1,
    "title": "10月第7号收入凭证",
    "priority": 1,
    "description": "fjl创建了第7号收入-其他收入凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508833133000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":7,\"id\":12405}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 16,
    "type": 1,
    "title": "10月第8号收入凭证",
    "priority": 1,
    "description": "fjl创建了第8号收入-其他收入凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508833166000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":8,\"id\":12406}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 17,
    "type": 1,
    "title": "10月第9号收入凭证",
    "priority": 1,
    "description": "fjl创建了第9号收入-其他收入凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508833189000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":9,\"id\":12407}",
    "readed": false,
    "isCheck": false
  },
  {
    "id": 18,
    "type": 1,
    "title": "10月第10号收入凭证",
    "priority": 1,
    "description": "fjl创建了第10号收入-其他收入凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508833193000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":10,\"id\":12408}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 21,
    "type": 1,
    "title": "10月第11号支出凭证",
    "priority": 1,
    "description": "fjl创建了第11号支出-其他支出凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508834219000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,24],\"proofNumber\":11,\"id\":12411}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 34,
    "type": 1,
    "title": "10月第13号支出凭证",
    "priority": 1,
    "description": "fjl创建了第13号支出-上缴税费凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508897418000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,25],\"proofNumber\":13,\"id\":12425}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 35,
    "type": 1,
    "title": "10月第14号支出凭证",
    "priority": 1,
    "description": "fjl创建了第14号支出-采购商品凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508897460000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,25],\"proofNumber\":14,\"id\":12426}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 36,
    "type": 1,
    "title": "10月第15号支出凭证",
    "priority": 1,
    "description": "fjl创建了第15号支出-采购商品凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1508898446000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,25],\"proofNumber\":15,\"id\":12427}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 37,
    "type": 1,
    "title": "10月第16号支出凭证",
    "priority": 1,
    "description": "fjl创建了第16号支出-发放工资凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1509376773000,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,30],\"proofNumber\":16,\"id\":12432}",
    "readed": true,
    "isCheck": false
  },
  {
    "id": 38,
    "type": 1,
    "title": "10月第17号支出凭证,10月第17号支出凭证,10月第17号支出凭证",
    "priority": 1,
    "description": "fjl创建了第17号支出-采购商品凭证,fjl创建了第17号支出-采购商品凭证,fjl创建了第17号支出-采购商品凭证,fjl创建了第17号支出-采购商品凭证",
    "icon": null,
    "sender": "fjl",
    "expire_date": null,
    "create_time": 1510121433650,
    "deleteable": false,
    "target_id": 2306,
    "bizType": 2,
    "metaInfo": "{\"accountingDate\":[2017,10,30],\"proofNumber\":17,\"id\":12433}",
    "readed": true,
    "isCheck": false
  }
];
export { messages };
