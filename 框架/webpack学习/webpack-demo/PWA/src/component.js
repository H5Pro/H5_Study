/**
 * Created by fjl on 2019/7/30
 */
export default function () {
	console.log(this);
	const el = document.createElement('div');
	el.innerHTML = "Progressive Web Applications (or PWAs) are web apps that deliver an experience similar to native applications";
	return el;
}
