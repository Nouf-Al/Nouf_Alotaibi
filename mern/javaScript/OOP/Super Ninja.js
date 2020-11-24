class Ninja {
    constructor(name,health){
        this.name=name
        this.health=health
        this.speed=3
        this.strength=3
    }

    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log('-----'+'Ninaj Stats'+'-----'+'\n Name: '+this.name+'\n Strength: '+this.strength+'\n Speed: '+this.speed+'\n Health: '+this.health+'')
    }
    drinkSake(){
        this.health +=10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name,200);
        this.wisdom=10
        super.strength=10
        super.speed=10

    }
    speakWisdom(){
        super.drinkSake()
        console.log(
            "What one programmer can do in one month, two programmers can do in two months.")
    }

    showStats(){
    console.log('Name: ',this.name ,'Health: ',this.health,', Speed: ',this.speed,', Strength: ',this.strength);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
