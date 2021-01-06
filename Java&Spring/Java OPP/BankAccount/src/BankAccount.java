import java.util.Random;

public class BankAccount {
	private String accountNum;
	private double checking;
	private double savings;
	private static int numberOfAccounts = 0;
	private static double totalBankBalance = 0;
	
	public BankAccount() {
		this.accountNum= randAccNum();
		this.checking=0d;
		this.savings=0d;
		numberOfAccounts++;
	}
	
	private String randAccNum() {
		String newAccountNumber = "";
		Random r = new Random();
		for(int i=0; i<10; i++) {
			newAccountNumber += r.nextInt(10);
		}
		return newAccountNumber;
	}

	public double getChecking() {
		return checking;
	}

	public double getSavings() {
		return savings;
	}
	
	public void deposit(double value, String accType) {
		if(value <= 0) {
			return;
		}
		if(accType == "savings") {
			savings+=value;
			totalBankBalance+=value;
		}else if (accType == "checking") {
			checking+=value;
			totalBankBalance+=value;
		}else {
			System.out.println("Invalid account type. please Choose savings or checking");
		}
	}
	
	public void withdraw(double value, String accType) {
		if(value <= 0) {
			return;
		}
		
		if(accType == "savings") {
			
			if(savings<value) {
				System.out.println("insufficient funds.");
			}
			else {
				savings-=value;
				totalBankBalance-=value;
			}
			
		}else if (accType == "checking") {
			
			if(checking<value) {
				System.out.println("insufficient funds.");
			}
			else {
				checking-=value;
				totalBankBalance-=value;
			}
			
		}else {
			
			System.out.println("Invalid account type. please Choose savings or checking");
			
		}
	}

	public static double getTotalBankBalance() {
		return totalBankBalance;
	}
	
	public String toString() {
		return "< Account no. " + accountNum + ", Total balance: $" + (savings + checking)+" >"; 
	}
	
}
