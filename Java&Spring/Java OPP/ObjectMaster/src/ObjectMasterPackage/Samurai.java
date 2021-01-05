package ObjectMasterPackage;

public class Samurai extends Human{
	private static int numSamurai = 0;
	
	public Samurai() {
		this.health = 200;
		Samurai.numSamurai += 1;
	}
	
	public void deathBlow(Human h){
		h.health = 0;
		this.health = (this.health/2);
	}

	public void meditate(){
		int halftHealth = this.health/2;
		this.health +=halftHealth;
	}
	
	public int howMany(){
		return Samurai.numSamurai;
	}

}
