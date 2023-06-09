import { createContext, useState } from "react";

export const DataContext = createContext();

import React from 'react'

export default function DateProvider(props) {
    const [htmlData, setHtmlData] = useState(`<canvas id="c"></canvas>`, '')
    const [cssData, setCssData] = useState(`body, html, canvas {
      margin: 0px; 
      padding: 0px; 
      position: absolute; 
    }
    
    canvas {
      background-color: #151B1F; 
    }
    
    .iose {
      width: 135px; 
      height: 45px; 
      background-color: lightgray; 
      top: 0px; 
      right: 0px; 
      position: fixed; 
      line-height: 22px; 
      font-size: 20px; 
      padding: 10px; 
      border-bottom-left-radius: 10px; 
      font-family: 'HelveticaNeue-UltraLight', 'Helvetica Neue UltraLight', Roboto, Arial, Sans-serif; 
      color: #151B1F; 
    }
    
    a {
      color: #1abc9c; 
    }`, '')
    const [jsData, setJsData] = useState(`var partNum = 70;


    var c = document.getElementById('c');
    var ctx = c.getContext('2d');
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    
    var mouse = {
      x: w / 2, 
      y: 0
    };
    
    document.addEventListener('mousemove', function(e){ 
        mouse.x = e.clientX || e.pageX; 
        mouse.y = e.clientY || e.pageY 
    }, false);
    
    var particles = [];
    for(i = 0; i < partNum; i++) {
      particles.push(new particle);
    }
    
    function particle() {
      this.x = Math.random() * w - w / 5;
      this.y = Math.random() * h;
      
      this.r = Math.random() * 7.5 + 3.25;
    }
    
    var draw = function() {
      c.width = w;
      c.height = h;
      
      for(t = 0; t < particles.length; t++) {
        var p = particles[t];
        var nowX = p.r + mouse.x / 4.6;
        var nowY = p.r + mouse.y / 4.6;
        var color = '#d35400';
        
        if(p.r < 10) {
          nowX = p.x + mouse.x / 0.5;
          nowY = p.y + mouse.y / 0.5;
        };
        if(p.r < 9) {
          nowX = p.x + mouse.x / 2;
          nowY = p.y + mouse.y / 2;
        };
        if(p.r < 8) {
          nowX = p.x + mouse.x / 3.5;
          nowY = p.y + mouse.y / 3.5;
        };
        if(p.r < 7) {
          nowX = p.x + mouse.x / 5;
          nowY = p.y + mouse.y / 5;
        };
        if(p.r < 6) {
          nowX = p.x + mouse.x / 6.5;
          nowY = p.y + mouse.y / 6.5;
        };
        if(p.r < 5) {
          nowX = p.x + mouse.x / 8;
          nowY = p.y + mouse.y / 8;
        };
        if(p.r < 4) {
          nowX = p.x + mouse.x / 9.5;
          nowY = p.y + mouse.y / 9.5;
        };
        if(p.r < 3) {
          nowX = p.x + mouse.x / 11;
          nowY = p.y + mouse.y / 11;
        };
        if(p.r < 2) {
          nowX = p.x + mouse.x / 12.5;
          nowY = p.y + mouse.y / 12.5;
        };
        if(p.r < 1) {
          nowX = p.x + mouse.x / 15;
          nowY = p.y + mouse.y / 15;
        };
        
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(nowX, nowY, p.r, Math.PI * 2, false);
        ctx.fill();
      }
    }
    
    setInterval(draw, 33);
    
    //doesn't it look 3d??
    
    //Follow me!
    
    //I appreciate it!`, '')
    
  return (
    <DataContext.Provider value={
        {htmlData,
        setHtmlData,
        cssData,
        setCssData,
        jsData,
        setJsData}
    }>
      {props.children}
    </DataContext.Provider>
  )
}
