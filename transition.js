
(function(){
  var layer=document.getElementById("transition");
  var links=document.querySelectorAll("a");
  for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
      var href=this.getAttribute("href");
      var target=this.getAttribute("target");
      if(!href || href.charAt(0)==="#" || href.indexOf("http")===0 || target==="_blank") return;
      e.preventDefault();
      layer.classList.add("active");
      window.setTimeout(function(){ window.location.href=href; },700);
    });
  }
  window.addEventListener("pageshow",function(){
    if(layer) layer.classList.remove("active");
  });
})();
