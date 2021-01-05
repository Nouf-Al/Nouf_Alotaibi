package ZooKeeperPackage;

public class Bat extends Mammal {
	public Bat(int energyLevel) {
		super(300);
	}
	public void fly() {
		System.out.println("The is flying. The energy level decreased by 50");
		energyLevel-=50;
	}
	
	public void eatHumans() {
		System.out.println("The bat has eaten a human. The energy level increases by 25");
		energyLevel+=25;
	}
	
	public void attackTown() {
		System.out.println("The bat is attacking the town. The energy level decreased by 100");
		energyLevel-=100;
	}
}
