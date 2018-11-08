(function (win) {
    var doc = win.document
    var docEl = doc.documentElement
    function setScale () {
      var phoneScale = parseInt(docEl.getBoundingClientRect().width) / 360;
      var Meta = document.createElement('meta');
          Meta.name = 'viewport';
          Meta.content = 'width=360, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + '';
          Meta.targetDensitydpi = 'device-dp'
      document.getElementsByTagName('head')[0].appendChild(Meta);
    }
    setScale()
  
  })(window)