

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

// printId(34);





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
// checkUSer(Driver);







// instanceof

class car {
    Drive() {
        console.log("Dirve Car")
    }
}

class Bike {
    Ride() {
        console.log("moter Bike ")
    }
}


function operate(vehicle: car | Bike) {
    if (vehicle instanceof car) {
        vehicle.Drive()

    } else {
        vehicle.Ride()
    }
}


// operate(new car())
// operate(new Bike())


// access modifier


class Driver4 {
    public name: string;
    private nid: string;
    protected earning: number;

    constructor(name: string, nid: string, earning: number) {
        this.name = name;
        this.nid = nid;
        this.earning = earning;
    }

}


const driver4 = new Driver4("boos ", "nid1234567", 45678);

console.log(driver4.name)



class proDriver extends Driver4 {

    certifiedDriver() {
        console.log("he is a pro driver!!");

    }
    constructor() {
        super("nagiba", "nid2345678", 23333);
        this.earning = 50000
    }
}

const nextGenDriver = new proDriver();
console.log(nextGenDriver)
console.log(nextGenDriver.certifiedDriver())