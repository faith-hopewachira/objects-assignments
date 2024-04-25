class Car{
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model
        this.year = year
        this.isAvailable = isAvailable

    }

    toggleAvailability(){
        this.isAvailable = !this.isAvailable;

    }
}

const mercedes = new Car("Mercedes", "BMW", 2022,true);
const hyundai = new Car("Hyundai", "Mazda", 2020,false);
console.log(mercedes);
console.log(hyundai);

mercedes.toggleAvailability();
console.log(mercedes);

hyundai.toggleAvailability();
console.log(hyundai);


// QUESTION1 PART 2
class Rental{
    constructor(car, nameRenter, startDate, endDate){
        this.car = car;
        this.nameRenter = nameRenter;
        this.startDate = startDate;
        this.endDate = endDate;
 
    }



rentalDuration(){
    const startDate = this.startDate.getTime();
    console.log(startDate);   

    const endDate = this.endDate.getTime();
    console.log(endDate);   

    const duration = this.startDate.getTime();
    console.log(duration); 
  

}
}

const car = new Car("Nissan", "Toyota", 2022,true);
const rentCar = new Rental(Car, "Faith", new Date("2024-06-20"),new Date("2024-01-25"));
console.log(rentCar);

// QUESTION3 PART 3
class Question{
    constructor(text,options,answer){
        this.text = text;
        this.options = options;
        this.answer = answer;

    }
    confirmAns(ansUser){
        return ansUser === this.answer;

    }
}


const q1 = new Question(
    "What is the capital of Kenya?",
    ["nairobi","dodoma","kigali","arusha"],
    "nairobi"
);

console.log(q1.confirmAns("nairobi"));
console.log(q1.confirmAns("dodoma"));



// QUESTION 2






