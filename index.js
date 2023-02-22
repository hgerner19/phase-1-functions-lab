// Code your solution in this file!
function distanceFromHqInBlocks(value){
    let blocks;
    if(value <= 42){
        blocks = 42 - value;
    }
    else{
        blocks=value - 42;
    }
    return blocks;
}
function distanceFromHqInFeet(value){
    let blocks = distanceFromHqInBlocks(value);
    return blocks*264;
}
function distanceTravelledInFeet(start,destination){
    let feet =(start-destination)*264;
    if(feet < 0){
        let new_feet = feet*-1;
        return new_feet;
    }
    else{
        return feet;
    }
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start,destination);
    let fare;
    if(feet <= 400){
        fare = 0;
        return fare;
    }
    else if(feet > 400 && feet <=2000){
        let new_feet = feet-400;
        fare = new_feet*.02;
        return fare;
    }
    else if(feet > 2000 && feet <= 2500){
        fare = 25;
        return fare;
    }
    else{
        return "cannot travel that far";
    }
    
}