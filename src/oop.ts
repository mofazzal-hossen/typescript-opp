

// class is a  blueprint which is used to create instanes --> objectt ber korar machine 
//OBJECT real instance

// ride 

class Ride {
    rider: string;
    distance: number;

    constructor(rider: string, distance: number) {

        this.rider = rider;
        this.distance = distance;
    }

    calculateOil() {
        return this.distance * 0.5
    }
}

const ride = new Ride("munna", 30)
const ride2 = new Ride("abule", 400)

// console.log(ride, ride2);
// console.log(ride.calculateOil());
// console.log(ride2.calculateOil());



///type Guard


function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());

    } else {
        console.log(id.toFixed(2));
    }
}

printId(34);





type TDriver = { driverName: string }
type TAdmin = { role: string }



function checkUSer(user: TDriver | TAdmin) {
    if ("role" in user) {
        console.log(Admin.role)
    } else {
        console.log(Driver.driverName)
    }
}


const Driver: TDriver = { driverName: "mokhles" }
const Admin: TAdmin = { role: "superAdmin" }
checkUSer(Driver);

