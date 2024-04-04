// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
  if (pickuplocation>42){return pickuplocation-42}else{return  42-pickuplocation}

}

function distanceFromHqInFeet(pickuplocation){
return distanceFromHqInBlocks(pickuplocation)*264
}

function distanceTravelledInFeet(start, destination){
  let distance=destination-start
  if (distance >=1){return distance*264 }
  else {return (start-destination)*264 }
}

function calculatesFarePrice(start, destination){
  let distance =distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
} else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
} else if (distance > 2000 && distance < 2500) {
    return 25;
} else {
    return 'cannot travel that far';
}
}
  
  
