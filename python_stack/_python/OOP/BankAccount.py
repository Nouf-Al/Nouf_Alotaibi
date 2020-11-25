class BankAccount:
    def __init__(self,int_rate,balance=0):
        self.int_rate=int_rate
        self.balance=balance

    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if (amount>self.balance):
            print("Insufficient funds: Charging a $5 fee")
            self.balance-=5
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        print("Balance: $"+str(self.balance))
        return self

    def yield_interest(self):
        if(self.balance>0):
            self.balance=self.balance*(self.int_rate/100)
        return self

account1 = BankAccount(1)
account2 = BankAccount(2)
account1.deposit(100).deposit(50).deposit(100).withdraw(50).yield_interest().display_account_info()
account2.deposit(300).deposit(300).withdraw(30).withdraw(40).withdraw(15).withdraw(15).yield_interest().display_account_info()



