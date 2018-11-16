/**
 * Created by fjl on 2018/11/15
 */

// 节流函数: 防止函数高频调用
const throttle = (func, time = 300) => {
  let canRun = true
  return (data) => {
    if(!canRun) return
    func(data)
    canRun = false
    setTimeout(function(){
      canRun = true
    }, time)
  }
}
const message = document.getElementById('message')
const pathsUl = document.getElementById('paths')
const useCamera = () => {
  const options = {
    quality: 100,
    mediaType: window.Camera.MediaType.VIDEO
  }
  const onSuccess = (data) => {
    console.log(data)
  }
  const onError = () => {
    console.log(err)
  }
  navigator.camera.getPicture(onSuccess, onError, options)
}
// 扫码插件1
const useScanner1 = () => {
  console.log(11111)
  const options = {
    preferFrontCamera : true, // iOS and Android
    showFlipCameraButton : true, // iOS and Android
    showTorchButton : true, // iOS and Android
    torchOn: true, // Android, launch with the torch switched on (if available)
    saveHistory: true, // Android, save scan history (default false)
    prompt : "Place a barcode inside the scan area", // Android
    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
    disableAnimations : true, // iOS
    disableSuccessBeep: false // iOS and Android
  }
  const onSuccess = (result) => {
    console.log(result)
  }
  const onError = (err) => {
    console.log(err)
  }
  console.log(cordova)
  cordova.plugins.barcodeScanner.scan(
    onSuccess,
    onError,
    options
  )
}
// 扫码插件2
const useScanner2 = () => {
  QRScanner.scan(displayContents);

  function displayContents(err, text){
    console.log(err, text)
    if(err){
      // an error occurred, or the scan was canceled (error code `6`)
    } else {
      // The scan completed, display the contents of the QR code:
      alert(text)
      setTimeout(() => {
        QRScanner.scan(displayContents)
      }, 3000)
    }
  }

// Make the webview transparent so the video preview is visible behind it.
  QRScanner.show()
}
// 定位插件
const useGeolocation = () => {
  const paths = []
  const options = {}
  pathsUl.innerHTML = ''
  const onSuccess = (result) => {

    const li = document.createElement('li')
    li.style.backgroundColor = '#fff'
    li.style.lineHeight = '45px'
    li.style.marginBottom = '10px'
    const {altitude, longitude} = result.coords
    li.innerHTML = `
    <div class="altitude">
    ${altitude}
    </div>
    <div class="longitude">
    ${longitude}
    </div> 
    `
    pathsUl.appendChild(li)
    paths.push(result)
    message.innerText = `${paths.length}`
  }
  const onError = (err) => {
    if (err.code === 1) {
     alert(err.message || '应用没有定位权限')
    } else {
      alert(err.message)
    }

    console.error(err)
  }
  const watchID = navigator.geolocation.watchPosition(throttle(onSuccess), throttle(onError), options)
}
// 相机
const cameraBtn = document.getElementById('use_camera')
cameraBtn.onclick = useCamera

// 扫码
const scannerBtn = document.getElementById('use_scanner')
scannerBtn.onclick = useScanner2

// 定位
const geolocationBtn = document.getElementById('use_geolocation')
geolocationBtn.onclick = useGeolocation
