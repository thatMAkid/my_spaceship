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
    var ship1 = JSON.parse({ship});
    console.log(ship1);
    //return JSON.parse(ship);

}

my_spaceship("RAALALL");
//my_spaceship("AAAA");
//my_spaceship('');