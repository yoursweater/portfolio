console.log('Dwarf loaded.')

function dwarfRunner(){

//Whereabouts
  var orientation = d.orientation;
  var location = [0,0];  //x and y coordinates (y is inverted on this grid, coords start at 0,0 and not 1,1)
  var surroundings = {
    right:[1,0],
    down: [0,1],
    up: [0,-1],
    left:[-1,0]
  };
  var endpoint = [18,14];
  var breadcrumbs = [];


//to get a copy of location
function copy(arr){
    var new_arr = arr.slice(0);
    for(var i = new_arr.length; i--;)
        if(new_arr[i] instanceof Array)
            new_arr[i] = copy(new_arr[i]);
    return new_arr;
}

//Update the surroundings
  function getSurroundings(location){
    var rightSquare = copy(location);
    var downSquare = copy(location);
    var upSquare = copy(location);
    rightSquare[0] = (rightSquare[0] + 1);
    downSquare[1] = (downSquare[1] + 1);
    upSquare[1] = (upSquare[1] - 1);
    surroundings.right = rightSquare;
    surroundings.down = downSquare;
    surroundings.up = upSquare;
  }

//Check to see if you can move
  function coastIsClearRight(surroundings){
    var rightX = surroundings.right[0];
    var rightY = surroundings.right[1];
    var squarecheckRight = g.at(rightX,rightY);
      if (squarecheckRight == 0){
        return true;
      } else {
        return false;
      };
  };

  function coastIsClearDown(surroundings){
    var downX = surroundings.down[0];
    var downY = surroundings.down[1];
    var squarecheckDown = g.at(downX,downY);
      if (squarecheckDown == 0){
        return true;
      } else {
        return false;
      };
  };

  function coastIsClearUp(surroundings){
    var upX = surroundings.up[0];
    var upY = surroundings.up[1];
    if (upY == -1){
      return false;
    } else {
      var squarecheckUp = g.at(upX,upY);
        if (squarecheckUp == 0){
          return true;
        } else {
          return false;
        };
    }
  };

  function coastIsClearLeft(surroundings){
    var leftX = surroundings.left[0];
    var leftY = surroundings.left[1];
    if (leftX == -1){
      return false;
    } else {
      var squarecheckLeft = g.at(leftX,leftY);
        if (squarecheckLeft == 0){
          return true;
        } else {
          return false;
        };
    }
  };

//Move, then update location and update surroundings
  function moveDwarf(){
    if (location[0] === endpoint[0] && location[1] === endpoint[1]){
        alert('Us dwarves are natural sprinters!')
        clearInterval(interval)
      }
    if (coastIsClearRight(surroundings)){
      d.orient('right');
      orientation = d.orientation;
      d.move();
      location[0] = (location[0] + 1)
      getSurroundings(location);
      return;
    };
    if (coastIsClearDown(surroundings) && orientation !== 'up'){
      d.orient('down');
      orientation = d.orientation;
      d.move();
      location[1] = (location[1] + 1)
      getSurroundings(location);
      return;
    };
    if (coastIsClearUp(surroundings) && orientation !== 'down'){
      d.orient('up');
      d.move();
      orientation = d.orientation;
      location[1] = (location[1] - 1)
      getSurroundings(location);
      return;
    };
    if (coastIsClearLeft(surroundings) && orientation !== 'right'){
      d.orient('left');
      orientation = d.orientation;
      d.move();
      location[0] = (location[0] - 1)
      getSurroundings(location);
      return;
    };
  };


  // for(i = 0; i <15; i++){
  //   moveDwarf()
  // }
var interval
interval = window.setInterval(moveDwarf, 250)

};

dwarfRunner();
