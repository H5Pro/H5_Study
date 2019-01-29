/**
 * Created by fjl on 2019/1/24
 */
function main() {
  const canvas = document.querySelector("#glcanvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    alert("Unable to initialize webGL. Your browser or machine may not support it.")
    return
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})
