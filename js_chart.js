let origin;
function draw_chart(id,data) {
    const elem = document.getElementById(id);
   // elem.innerHTML = data;
    const ctx = elem.getContext("2d");
    ctx.canvas.width = elem.width;
    ctx.canvas.height = elem.width * (9/16);
    console.log("width:" + elem.width + "\nheight: " +elem.height);
    /*Draw Chart Area
    @elem = canvas Element
    @param ctx = canvas 2d context 
    */
    ctx.beginPath();
    ctx.strokeRect(2, 2, elem.width -4, elem.height -4);
    
    origin = {
        x: elem.width*0.1,
        y: elem.height * 0.9
    }
    //@param Origin referes to Origin of Chart
    let max = Math.max(...data);
   // max = 20;
    console.log(Math.max(data),"\n",data);
    draw_axis(elem,ctx,origin, max);
    draw_yaxis(elem,ctx,origin, max)
  //  ctx.beginPath();
   // ctx.fillRect(125, 35, 50, 50);
}

    //Draw X-Axis
function draw_axis(elem,ctx,origin, max) {
    ctx.beginPath();
    ctx.moveTo(origin.x,origin.y);
    ctx.lineTo(elem.width*0.95,origin.y);
    ctx.stroke();
    ctx.fillText(0, origin.x - 5    ,origin.y +10); 
    ctx.fillText(max, elem.width*0.95 - 5,origin.y + 10); 

}
    //Draw Y-Axis
function draw_yaxis(elem,ctx,origin, max) {

    ctx.beginPath();
    ctx.moveTo(origin.x,origin.y);
    ctx.lineTo(origin.x,elem.height*0.05);
    ctx.stroke();
    //ctx.fillText(0, origin.x - 5    ,origin.y +10); 
    ctx.fillText(max, origin.x - 15,elem.height*0.1); 

}
//document.addEventListener('DOMContentLoaded', init)