window.addEventListener('load', function() {
    const progressBar = document.querySelector('.progressBar');
  
    function updateProgressBar(value) {
      progressBar.style.width = value + '%';
    }
  
    function incrementProgressBar(value) {
      var currentWidth = parseFloat(progressBar.style.width);
      updateProgressBar(currentWidth + value);
    }
  
    function loadComplete() {
      updateProgressBar(100);
      setTimeout(function() {
        progressBar.style.display = 'none';
      }, 500);
    }
  
    var scriptLoaded = false;
    var styleLoaded = false;
  
    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'interactive') {
        var styleSheets = document.styleSheets.length;
        if (styleSheets > 0) {
          styleLoaded = true;
          incrementProgressBar(40 / styleSheets);
        }
        var scripts = document.scripts.length;
        if (scripts > 0) {
          scriptLoaded = true;
          incrementProgressBar(40 / scripts);
        }
      }
      if (document.readyState === 'complete') {
        if (!styleLoaded && !scriptLoaded) {
          updateProgressBar(100);
          loadComplete();
        }
      }
    });
  
    window.addEventListener('load', function() {
      if (!styleLoaded || !scriptLoaded) {
        incrementProgressBar(10);
      }
      loadComplete();
    });
  
  });
  