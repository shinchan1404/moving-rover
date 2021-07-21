canvas=document.getElementById('idk')
ctx=canvas.getContext("2d")
rover_width=100;
rover_height=90;
background_image="mars.jpg"
rover_image="rover.png"
rover_x=10;
rover_y=10;
function add(){
 back=new Image();
 back.onload=uploadBackground;
 back.src=background_image;
 rov=new Image()
 rov.onload=uploadrover;
 rov.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(back,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rov,rover_y,rover_x,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed)
    if(keyPressed=='38')
    {
      up();
     }
     if(keyPressed=='40')
     {
       down();
      }
      if(keyPressed=='37')
      {
        left();
       }
       if(keyPressed=='39')
       {
         right();
        }
    
     if(keyPressed=='87')
        {
          www();
         }
      if(keyPressed=='83')
         {
           sss();
          }
     if(keyPressed=='65')
          {
            aaa();
           }
      if(keyPressed=='68')
           {
             ddd();
            }
    }



function up() 
{ if(rover_x >=10) 
    { rover_x = rover_x - 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function down() 
{ if(rover_x <=400) 
    { rover_x = rover_x + 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function left() 
{ if(rover_y >=0) 
    { rover_y = rover_y - 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function right() 
{ if(rover_y <=700) 
    { rover_y = rover_y + 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function www() 
{ if(rover_x >=10) 
    { rover_x = rover_x - 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function sss() 
{ if(rover_x <=400) 
    { rover_x = rover_x + 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function aaa() 
{ if(rover_y >=0) 
    { rover_y = rover_y - 10; 
    uploadBackground(); 
    uploadrover(); } 
}
function ddd() 
{ if(rover_y <=700) 
    { rover_y = rover_y + 10; 
    uploadBackground(); 
    uploadrover(); }}
