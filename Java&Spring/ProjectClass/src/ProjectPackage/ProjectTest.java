package ProjectPackage;

public class ProjectTest {

	public static void main(String[] args) {
//		Project p1 = ;
//		System.out.print(p1);
		
//		Project p2 = new Project("Nouf");
//		System.out.print(p2.elevatorPitch());
		Portfolio po1 = new Portfolio();
		po1.AddToPortfolio(new Project("Nouf","NOUF PROJECT",8.8));
		po1.AddToPortfolio(new Project("RWN","RWN PROJECT",3.4));
		po1.showPortfolio();

	}

}
