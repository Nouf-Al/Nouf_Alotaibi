class BankAccount:
    def __init__(self,int_rate,balance=0):
        self.int_rate=int_rate
        self.balance=balance

class User:
    def __init__(self,name):
        self.name = name
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self,amount):
        self.account.balance+=amount
        return self
    
    def make_withdrawal(self,amount):
        self.account.balance-=amount
        return self

    def display_user_balance(self):
        print("User Name: ", self.name, "- User Balance: $"+str(self.account.balance))
        return self

    def transfer_money(self,fromUser, toUser, amount):
        fromUser.make_withdrawal(amount)
        toUser.make_deposit(amount)
        return self


user1 = User("Farah")
user2 = User("Naif")
user3 = User("Leen")

user1.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawal(50).display_user_balance()

user2.make_deposit(100).make_deposit(100).make_withdrawal(100).make_withdrawal(50).display_user_balance()

user3.make_deposit(100).make_withdrawal(30).make_withdrawal(10).make_withdrawal(50).display_user_balance()

user1.transfer_money(user1,user2,50).display_user_balance()
