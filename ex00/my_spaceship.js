function my_spaceship(course) {
    //console.log(course);
    directions = course.split(""); //separates the Input String into individual array characters
    //console.log(directions);

    //starting point for ship
    var hor = 0;
    var ver = 0;
    var facing = 'up'; 
    //console.log(ship);

    i = 0;

    while (i < directions.length) {
        //console.log(directions[i]);
        if (directions[i] === "R") {
            if (facing === 'up') ((facing) = 'right');
            else if (facing === 'right') ((facing) = 'down');
            else if (facing === 'down') ((facing) = 'left');
            else if (facing === 'left') ((facing) = 'up');
        };
        if (directions[i] === "L") {
            if (facing === 'up') ((facing) = 'left');
            else if (facing === 'left') ((facing) = 'down');
            else if (facing === 'down') ((facing) = 'right');
            else if (facing === 'right') ((facing) = 'up');
        };
        if (directions[i] === "A") {
            if (facing === 'up') (ver--);
            else if (facing === 'right') (hor++);
            else if (facing === 'down') (ver++);
            else if (facing === 'left') (hor--);
        };
        //console.log(ship);
        i++;
    };
    //console.log(ship);
    //console.log(direction);
    let position = "{x: " + hor + ", y: " + ver + ", direction: '" + facing +"'}";
    //console.log(position);
    return position;

}

my_spaceship("");


/*

//THIS IS ANOTHER WAY TO SET UP A SPACESHIP
//THIS METHOD CREATES AN OBJECT THAT TRACKS THE SHIP'S POSITION AS AN OBJECT
//THE FUNCTION ITSELF ACCESSES AND MODIFIES THE OBJECT ACCORDING TO THE INPUT

function my_spaceship(course){
    //console.log(course);
    directions = course.split(""); //separates the Input String into individual array characters
    //console.log(directions);

    var ship = {x: 0, y: 0, direction: 'up'}; //starting point for ship
    //console.log(ship);

    i = 0;

    while (i<directions.length){
        //console.log(directions[i]);
        if (directions[i]==="R"){
            if (ship.direction === 'up')  ((ship.direction) = 'right');
            else if (ship.direction === 'right') ((ship.direction) = 'down');
            else if (ship.direction === 'down') ((ship.direction) = 'left');
            else if (ship.direction === 'left') ((ship.direction) = 'up');            
        };
        if (directions[i]==="L"){
            if (ship.direction === 'up')  ((ship.direction) = 'left');
            else if (ship.direction === 'left') ((ship.direction) = 'down');
            else if (ship.direction === 'down') ((ship.direction) = 'right');
            else if (ship.direction === 'right') ((ship.direction) = 'up');            
        };
        if (directions[i]==="A"){
            if (ship.direction === 'up')  ((ship.y)--);
            else if (ship.direction === 'right') ((ship.x)++);
            else if (ship.direction === 'down') ((ship.y)++);
            else if (ship.direction === 'left') ((ship.x)--); 
        };
        //console.log(ship);
        i++;
    };
    console.log(ship);
    return ship;

}

my_spaceship('');

*/