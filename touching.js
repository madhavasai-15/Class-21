function isTouching(school, college){
    //distance between the rectangles <= sum of half their widths ===> THEY ARE COLLIDING
    if (school.x - college.x <= college.width/2 + school.width/2
      && college.x - school.x <= college.width/2 + school.width/2
      && school.y - college.y <= college.height/2 + school.height/2
      && college.y - school.y <= college.height/2 + school.height/2) {
        //Yes, they are touching
        //True
        return true;
    }
    else {
        //No, they aren't
        //False
        return false;
    }
  }
  function Bounce(sprite1, sprite2){
    if(sprite1.x - sprite2.x <= sprite2.width/2 + sprite1.width/2
     && sprite2.x - sprite1.x <= sprite2.width/2 + sprite1.width/2){
       sprite1.velocityX *= (-1);
       sprite2.velocityX *= (-1);
     }
     if (sprite1.y - sprite2.y <= sprite2.width/2 + sprite1.width/2
       && sprite2.y - sprite1.y <= sprite2.width/2 + sprite1.width/2){
        sprite1.velocityY *= (-1);
        sprite2.velocityY *= (-1);
       }
  }