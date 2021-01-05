package ProjectPackage;

public class ProjectTest {

	public static void main(String[] args) {
		Portfolio po1 = new Portfolio();
		po1.AddToPortfolio(new Project("Nouf","NOUF PROJECT",8.8));
		po1.AddToPortfolio(new Project("RWN","RWN PROJECT",3.4));
		po1.showPortfolio();

	}

}
