package ZooKeeperPackage;

public class Gorilla extends Mammal {
	public Gorilla(int energyLevel) {
		super(energyLevel);
	}
	public void throwSomething() {
		System.out.println("The Gorilla has thrown something. The energy level decreased by 5");
		energyLevel-=5;
	}
	
	public void eatBananas() {
		System.out.println("The Gorilla has eaten a banana and he is happy. The energy level increases by 10");
		energyLevel+=10;
	}
	
	public void climb() {
		System.out.println("The Gorilla has climbed a tree. The energy level decreased by 10");
		energyLevel-=10;
	}
}
