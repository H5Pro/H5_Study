/**
 * Created by fjl on 2019/7/30
 */
export default function () {
	console.log(this);
	const el = document.createElement('div');
	el.innerHTML = `
	TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
	 In this guide we will learn how to integrate TypeScript with webpack.
	`;
	return el;
}
