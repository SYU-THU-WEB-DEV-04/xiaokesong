<template>
  <div>

  </div>
</template>

<script setup>
//导入pixi
import * as PIXI from "pixi.js";
//导入axios
import axios from "axios";
var data=[]


const app=new PIXI.Application({
  width:window.innerWidth,
  height:window.innerHeight,
  backgroundColor:'black',
  resolution:window.devicePixelRatio||1,
  antialias:true,
});
document.body.appendChild(app.view)

axios({
        method: "get",
        url: 'http://127.0.0.1:2000/',
      }).then(
        (res) => {
          console.log(res);
          data=res.data.rects
          console.log(data[0][3][1],window.innerHeight);

          for(var i=0;i<data.length;i++){
           let rectangle= new PIXI.Graphics()
            rectangle.beginFill(0x66ccff,0.3)
            rectangle.lineStyle(1,0xff0000,1)
            rectangle.drawRect(data[i][3][0]*120+150,window.innerHeight-(data[i][3][1]*120)-(data[i][3][3]*120)-150,data[i][3][2]*120,data[i][3][3]*120)
            // 
            rectangle.endFill()

            app.stage.addChild(rectangle)
          }

        },
        (err) => {
          console.log(err);
        }
      );

      //  let rectangle= new PIXI.Graphics()
      //       rectangle.beginFill(0x66ccff,0.3)
      //       rectangle.lineStyle(1,0xff0000,1)
      //       rectangle.drawRect(10,window.innerHeight-20-200,100,200)
      //       // 
      //       rectangle.endFill()

      //       app.stage.addChild(rectangle)

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
canvas{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
