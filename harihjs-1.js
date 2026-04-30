var text="Welcome to VedaRahasya.Net..This Site is best viewed with IE 5.0 & above."
var speed=95
var x=0
function bb(){
var a=text.substring(0,x)
window.status=a
if(x==text.length){x=0
}else{x++}setTimeout("bb()",speed)
}bb();

function right(e) {
   if (navigator.appName == 'Netscape' && 
   (e.which == 3 || e.which == 2))
   return false;
   else if (navigator.appName == 'Microsoft Internet Explorer' && 
   (event.button == 2 || event.button == 3)) {
   alert("Sorry! This function is disabled in my site..");
   return false;
   }
   return true;
   }
   document.onmousedown=right;
   if (document.layers) window.captureEvents(Event.MOUSEDOWN);
   window.onmousedown=right;