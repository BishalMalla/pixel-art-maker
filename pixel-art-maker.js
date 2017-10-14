//alert('connected');
var canvas=document.createElement('div');
var divEraser=document.getElementsByClassName('eraser');
var divColorList = document.getElementsByClassName('colorList')[0];
var trashDiv = document.getElementsByClassName('trashDiv')[0];
var color='white';
var listOfColor=['pink','violet','indigo','brown','black','gold','red','blue','green','yellow','orange','purple']
var mouseIsDown=false;
document.addEventListener('DOMContentLoaded', function () {
  createCanvas();
});
function createCanvas(){
  console.log("in createCanvas");
  var divCanvas = document.getElementById('canvas-div');
  canvas.id ='canvas';
  canvas.style.width = '700px';
  canvas.style.height ='397px';
  canvas.style.backgroundColor ='white';
  canvas.style.marginTop ='2px';
  canvas.style.align='center';
  canvas.style.marginLeft= 'auto';
  canvas.style.marginRight='auto';
  divCanvas.appendChild(canvas);
  createDiv();
  createColorDiv();
  createTrashDrawing();
}
function createDiv(){
  console.log("this is div");
  for(let i=0; i<12600/20; i++){
    var divInCanvas = document.createElement('div');
    divInCanvas.className='divInCanvas'
    divInCanvas.style.width='20px';
    divInCanvas.style.height='20px';
    divInCanvas.style.backgroundColor ='white';
    divInCanvas.style.paddingBottom='20px'
    divInCanvas.style.border = '1px solid grey';
    divInCanvas.style.float='left';
    divInCanvas.style.opacity ='0.7';
    canvas.appendChild(divInCanvas);
    divInCanvas.addEventListener("mousedown",function(event){
      console.log("in mouse down");
      mouseIsDown=true
      event.target.style.backgroundColor = color;
    });
    divInCanvas.addEventListener("mousemove",function(event){
          if(mouseIsDown===true){
            event.target.style.backgroundColor = color;
          }
    });
    divInCanvas.addEventListener("mouseup",function(event){
      mouseIsDown =false;
    });
  }
}
function createColorDiv(){
    console.log("this is color div");
    for(let i=0;i<listOfColor.length;i++){
    var divColor = document.createElement('div');
    divColor.className='divColor';
    divColor.style.width='30px';
    divColor.style.height='25px';
    divColor.style.backgroundColor=listOfColor[i];
    divColor.style.marginLeft= '20px';
    divColor.style.marginTop='30px';
    divColor.style.float='left';
    divColor.style.borderRadius ='50px';
    divColorList.appendChild(divColor);
  }
}
function createTrashDrawing(){
  var Div = document.createElement('div')
  Div.className='divTrash';
  Div.style.width='30px';
  Div.style.height='25px';
  Div.style.backgroundColor='white';
  Div.style.marginLeft= '20px';
  Div.style.marginTop='30px';
  Div.style.float='left';
  Div.style.borderRadius ='50px';
  trashDiv.appendChild(Div);
}
divColorList.addEventListener("click",function(event){
  color= event.target.style.backgroundColor;
  console.log(color)
});
trashDiv.addEventListener("click",function(){
  window.location.reload();
})
