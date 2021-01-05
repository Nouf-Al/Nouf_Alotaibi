package ObjectMasterPackage;

public class Human {
	private int strength = 3;
	private int stealth= 3;
	private int intelligence = 3;
	private int health = 100;

	
	public int attack(Human h) {
		h.health = h.health - this.strength;
		return h.health;
	}
	
	public String toString() {
		return "strength: " + strength+"\nstealth: "+stealth+"\nintelligence: "+ intelligence+"\nhealth: "+health;
	}
	
}
