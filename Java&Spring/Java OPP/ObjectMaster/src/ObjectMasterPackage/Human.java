package ObjectMasterPackage;

public class Human {
	protected int strength = 3;
    protected int stealth = 3;
    protected int intelligence = 3;
    protected int health = 100;

	
	public int attack(Human h) {
		h.health = h.health - this.strength;
		return h.health;
	}
	
	public String toString() {
		return "strength: " + strength+"\nstealth: "+stealth+"\nintelligence: "+ intelligence+"\nhealth: "+health;
	}
	
}
