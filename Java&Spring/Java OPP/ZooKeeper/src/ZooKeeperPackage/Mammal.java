package ZooKeeperPackage;

public class Mammal {
	private int energyLevel =100;
	
	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel ) {
		this.energyLevel = this.energyLevel + energyLevel;
	}

	public int displayEnergy() {
		System.out.println("Energy Level: "+energyLevel);
		return energyLevel;
	}
}
