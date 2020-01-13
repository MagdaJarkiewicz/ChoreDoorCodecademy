let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const isClicked = (door) => {
  if (door.src===closedDoorPath){
    return false;
  } else {
    return true;
  }
}
const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors=0) {
    gameOver(win);
  } else if (isBot(door)){gameOver()}
}
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let randomChoreDoorGenerator = () =>
{   let choreDoor = Math.floor(Math.random()*numClosedDoors); if (choreDoor===0){openDoor1=botDoorPath;
 openDoor2=beachDoorPath;
 openDoor3=spaceDoorPath;
} else if (choreDoor===1) { openDoor2=botDoorPath;
openDoor1=beachDoorPath;
openDoor3=spaceDoorPath;
} else if (choreDoor===2){openDoor3=botDoorPath;
openDoor1=spaceDoorPath;
openDoor2=beachDoorPath;
}  };
door1.onclick = () => {
if (!isClicked(doorImage1)){
doorImage1.src=openDoor1;
playDoor(doorImage1);
} };
door2.onclick = (doorImage2) => {
 if (!isClicked(doorImage2)){
doorImage2.src=openDoor2;
playDoor(doorImage2);
}
};
door3.onclick = (doorImage3) => {
if (!isClicked(doorImage3)){
doorImage3.src=openDoor3;
playDoor(doorImage3);
}
};
const gameOver = (status) => {
  if (status==='win'){ startButton.innerHTML= 'You win! Play again?';
  }
}
randomChoreDoorGenerator()
