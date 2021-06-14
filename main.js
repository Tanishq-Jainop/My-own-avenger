var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=100;
player_y=100;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object)
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=='80'){
        block_image_width=block_image_width+1;
        block_image_height=block_image_height+1;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keypress=='77'){
        block_image_width=block_image_width-1;
        block_image_height=block_image_height-1;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='40'){
    down();
        console.log("down");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='39'){
        right();
        console.log("right");
    }
  if(keypress=='87'){
      new_image('captain_america_left_hand.png');
      console.log("w");
  }
  if(keypress=='71'){
    new_image('hulk_face.png');
    console.log("g");
}
if(keypress=='76'){
    new_image('hulk_left_hand.png');
    console.log("l");
}
 
if(keypress=='84'){
    new_image('hulk_legs.png');
    console.log("t");
}

if(keypress=='82'){
    new_image('hulk_right_hand.png');
    console.log("r");
}
if(keypress=='89'){
    new_image('hulkd_body.png');
    console.log("y");
}
if(keypress=='68'){
    new_image('ironman_body.png');
    console.log("d");
}
if(keypress=='85'){
    new_image('ironman_face.png');
    console.log("u");
}
if(keypress=='67'){
    new_image('ironman_left_hand.png');
    console.log("c");
}
if(keypress=='65'){
    new_image('ironman_legs.png');
    console.log("a");
}
if(keypress=='66'){
    new_image('spiderman_face.png');
    console.log("b");
}
if(keypress=='69'){
    new_image('spiderman_left_hand.png');
    console.log("e");
}
if(keypress=='70'){
    new_image('spiderman_legs.png');
    console.log("f");
}
if(keypress=='72'){
    new_image('spiderman_right_hand.png');
    console.log("h");
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log(player_x,player_y)
        canvas.remove(player_object);
        player_update()}};

        
function down(){
 if(player_y<500){
     player_y=player_y+block_image_height;
     console.log(player_x,player_y)
     canvas.remove(player_object);
     player_update()}};

     function left(){
        if(player_x>=0){
            player_x=player_x-block_image_width;
            console.log(player_x,player_y)
            canvas.remove(player_object);
            player_update()}}

            function right(){
                if(player_x<=850){
                    player_x=player_x+block_image_width;
                    console.log(player_x,player_y)
                    canvas.remove(player_object);
                    player_update()}}

}