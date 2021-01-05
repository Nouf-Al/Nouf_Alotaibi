package ProjectPackage;

public class Project {
	private String name;
	private String description;
	private double initialCost;
	
	public String getName() { return name; }
    public String getDescription() { return description; }
    public double getCost() { return initialCost; }
    
    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
    public void setCost(double initialCost) { this.initialCost = initialCost; }

	public String ElevatorPitch() {
		return name+" ("+initialCost+") : "+description;
	}
	
	public Project() {
	}
	
	public Project(String name, String description, double initialCost) {
        this.name = name;
        this.description = description;
        this.initialCost = initialCost;
    }
	
    public Project(String name) {
        this.name = name;
    }

}