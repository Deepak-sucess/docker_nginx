function getFileNameFromURL(url) {
    if (!url) {
      url = window
    }
    var filename = url.split('/').pop().split('#')[0].split('?')[0];
    return(filename);
  }

  getFileNameFromURL("")
  