/**
 * Created by fjl on 2019/3/4
 */

type Dictionary<T> = { [key: string]: T };

declare interface IEventBus {
  $on(event: string | string[], callback: Function): this;
  $off(event?: string | string[], callback?: Function): this;
  $emit(event: string, ...args: any[]): this;
}

interface Window {
  $eventBus: any;
  $main: any;
  $app: any;
  isDev: boolean; // 是否为开发环境
}

declare const GLOBAL: any;
declare const $eventBus: IEventBus;
declare const $app: any; // 应用程序的根实例
declare const $main: any; // 应用程序的主模块
declare const moment: any;
declare const VueECharts: any;
declare const vuedraggable: any;
declare const XLSX: any;
declare const BScroll: any;
declare const isDev: boolean;  // 是否为开发环境
