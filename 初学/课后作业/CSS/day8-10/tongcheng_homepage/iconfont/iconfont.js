;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.44 3.168c-279.808 0-507.424 227.616-507.424 507.424s227.616 507.36 507.424 507.36c279.776 0 507.36-227.584 507.36-507.36s-227.584-507.424-507.36-507.424zM513.44 964.064c-250.08 0-453.536-203.424-453.536-453.472s203.456-453.536 453.536-453.536c250.048 0 453.472 203.456 453.472 453.536s-203.424 453.472-453.472 453.472zM728.128 511.584c0 118.56-96.128 214.688-214.688 214.688s-214.688-96.128-214.688-214.688c0-118.56 96.128-214.688 214.688-214.688s214.688 96.128 214.688 214.688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangxiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 665.6 225.28 377.79456l19.31264-19.39456L512 626.7904 779.40736 358.4 798.72 377.79456 512 665.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangxiajiantou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 358.399l286.72 287.805-19.313 19.395-267.407-268.39-267.407 268.39-19.313-19.395 286.72-287.805z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-radio1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.032795 0C229.684088 0 0.000631 229.683457 0.000631 512.032164S229.684088 1024.001261 512.032795 1024.001261c282.317173 0 511.966574-229.651923 511.966574-511.969097S794.349969 0 512.032795 0L512.032795 0zM512.032795 969.623095c-252.351223 0-457.655259-205.271241-457.655259-457.589669 0-252.319689 205.304036-457.655259 457.655259-457.655259 252.318427 0 457.59093 205.304036 457.59093 457.655259C969.623725 764.384648 764.351223 969.623095 512.032795 969.623095L512.032795 969.623095z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)