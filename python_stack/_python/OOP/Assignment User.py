class User:
    def __init__(self,name):
        self.name = name
        self.balance= 0

    def make_deposit(self,amount):
        self.balance+=amount
    
    def make_withdrawal(self,amount):
        self.balance-=amount

    def display_user_balance(self):
        print("User:", self.name, "Balance: $"+str(self.balance))

    def transfer_money(self, toUser, amount):
        self.make_withdrawal(amount)
        toUser.make_deposit(amount)


user1 = User("Farah")
user2 = User("Naif")
user3 = User("Leen")

user1.make_deposit(100)
user1.make_deposit(100)
user1.make_deposit(100)
user1.make_withdrawal(50)
user1.display_user_balance()

user2.make_deposit(100)
user2.make_deposit(100)
user2.make_withdrawal(100)
user2.make_withdrawal(50)
user2.display_user_balance()

user3.make_deposit(100)
user3.make_withdrawal(30)
user3.make_withdrawal(10)
user3.make_withdrawal(50)
user3.display_user_balance()

user1.transfer_money(user2,50)
user1.display_user_balance()
user2.display_user_balance()
