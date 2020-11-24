
class Card {
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
    
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res -= this.power 
    }
}

class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.magnitude=magnitude;
        this.text=text;
        this.stat=stat
    }

    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == "resilience"){
                target.res +=this.magnitude
            }
            else{
            target.power +=this.magnitude
            }
            
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}



const Red_Belt_Ninja = new Unit('Red Belt Ninja',3,3,4)
const Black_Belt_Ninja = new Unit('Black Belt Ninja',4,5,4)


const Hard_Algorithm = new Effect('Hard Algorithm',2,"increase target's resilience by 3","resilience",3)
const Unhandled_Promise_Rejection = new Effect('Unhandled Promise Rejection',1,"reduce target's resilience by 2","resilience",-2)
const Pair_Programming = new Effect('Pair Programming',3,"increase target's power by 2","power",2)

console.log("before: ", Red_Belt_Ninja)
console.log('// Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"')
Hard_Algorithm.play(Red_Belt_Ninja)
console.log("After: ", Red_Belt_Ninja)

console.log("before: ", Red_Belt_Ninja)
console.log('// Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja');
Unhandled_Promise_Rejection.play(Red_Belt_Ninja)
console.log("After: ", Red_Belt_Ninja)


console.log("before: ", Red_Belt_Ninja)
Pair_Programming.play(Red_Belt_Ninja)
console.log('// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"')
console.log("After: ", Red_Belt_Ninja)


console.log("before:" ,Black_Belt_Ninja)
console.log('// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"')
Red_Belt_Ninja.attack(Black_Belt_Ninja)
console.log("After:" ,Black_Belt_Ninja)


