
public class BankAccountTest {

	public static void main(String[] args) {
		BankAccount acc1 = new BankAccount();
		System.out.println(acc1);
		acc1.deposit(100, "savings");
		acc1.deposit(100, "checking");
		acc1.withdraw(50, "savings");
		acc1.withdraw(40, "checking");
		System.out.println(acc1.getChecking());


	}

}
