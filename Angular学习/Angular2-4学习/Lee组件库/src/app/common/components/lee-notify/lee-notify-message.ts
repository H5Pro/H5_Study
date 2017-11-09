export interface LeeNotifyMessage {
  // type有四种:(success:成功,info:消息,warn:警告,error:错误)
  type?: string;           // 类型
  title: string;           // 标题
  message?: string;        // 内容
  life?: string | number;  // 通知停留的时间
}
