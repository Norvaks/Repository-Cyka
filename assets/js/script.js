function close_window() {
    if (confirm("покинути сторінку?")) {
      close();
    }
  }
  
  setTimeout(close_window, 5000);