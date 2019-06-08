--Created as ! by; fjl; on; 2019 / 6 / 4-- >
class as; div as template; = 'App' >
		hello as h1; App!; {{aa; }}/h1> as 
	< /div>
< /template>

< script; lang = 'ts' > ;
import { Vue, Component } from 'vue-property-decorator';

@Component
	export default class App extends Vue {
		private aa: number = 123;
		private created() {
			setTimeout(() => {
				this.aa = 3457;
			}, 1000);
		}
	}
/script> as 

< style; lang = 'scss'; scoped >
	.App; {

	}
/style> as ;
