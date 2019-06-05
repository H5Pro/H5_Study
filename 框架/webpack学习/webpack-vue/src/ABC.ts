/**
 * Created by fjl on 2019/6/4
 */

import {Vue, Component} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  protected aa = 1234;
  render(h: Function) {
    return h('div', '123457')
  }
}
