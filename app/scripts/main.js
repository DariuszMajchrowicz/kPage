window.onload = function() {
  readDOM()
  updateGlobals();
  introAnimate()
  addEvents();

};

var globals = {
  width : 0
}
 var dom ={
   head : null,
   imageHead : null,
   bottomHead : null,
   overlayHead : null
 }
 function updateGlobals() {
   globals.width = window.innerWidth;
 }

 function readDOM() {
   dom.head = query('#head');
   dom.imageHead = query('.bgHead');
   dom.bottomHead = query('.bottom-head');
   dom.overlayHead = query('.overlayHead');
 }

function addEvents() {
  paralax(event);
  dom.bottomHead.addEventListener('mouseover', ()=>{
    TweenMax.to(dom.overlayHead, .3, {opacity : 1})
  })
  dom.bottomHead.addEventListener('mouseout', ()=>{
    TweenMax.to(dom.overlayHead, .3, {opacity : 0})
  })

}



function introAnimate() {
  let fullName = query('#full-name').innerHTML;
  TweenMax.to(dom.overlayHead, .3, {opacity : 0})
  console.log(fullName[1])
}

function paralax(event) {
  dom.head.addEventListener('mousemove', (e)=>{
    let offsetX = 4*(e.pageX/globals.width);
    TweenMax.set(dom.imageHead, {x : -offsetX + '%'})
  })
}
