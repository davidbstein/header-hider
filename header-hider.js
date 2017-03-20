//TODO: remove the embarassing scoping hax.
(function(){
  var header_hider = function(){
    this.scrollY = 0;
    this.old_scroll = window.onscroll;
    this.header = document.getElementsByTagName("header")[0]
    if (this.header == undefined){
      throw("in order to use the header hider you must have a <header>");
    }
    this.header.style.transition = "margin-top 0.2s ease-out 0s"
    this.header_height = header.offsetHeight;
    this.hidden = false;
    this.hide = (function(){
      this.header.style.marginTop = -this.header_height;
      this.hidden = true;
    }).bind(this);
    this.unhide = (function(){
      this.header.style.marginTop = 0;
      this.hidden = false;
    }).bind(this);
    this.unhide();
    window.onscroll = (function(){
      if (this.old_scroll) this.old_scroll();
      var new_scrolly = window.pageYOffset;
      if (new_scrolly < 64 || new_scrolly < this.scrollY) {
        this.unhide();
      } else {
        this.hide();
      }
      this.scrollY = new_scrolly;
    }).bind(this);
  }
  if (window.onload){
    var _onload;
    window.onload = function(e){
      _onload(e);
      header_hider();
    }
  } else {
    window.onload = header_hider;
  }
})();
