

// class is a  blueprint which is used to create instanes --> objectt ber korar machine 
//OBJECT real instance

// ride 

class Ride {
    rider: string;
    distance: number;

    constructor(rider:string, distance: number){
     
        this.rider= rider;
        this.distance=30;
    }

    calculateOil(){
        return this.distance * 0.5
    }
}

const ride=  new Ride("munna", 30)

console.log(ride);
console.log(ride.calculateOil());
