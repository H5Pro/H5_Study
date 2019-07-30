/**
 * Created by fjl on 2019/7/29
 */
module.exports = function() {
	console.log(this);
	// 假设我们处于 `window` 上下文
	// this.alert('Hmmm, this probably isn\'t a great idea')
	const el = document.createElement('div');
	el.innerHTML = 'Click next button and look at tht console';
	const btn = document.createElement('button');
	btn.innerText = 'print';
	el.appendChild(btn);
	return el;
}
