# inflation(self, percent_increase) - increases the price of each product by the percent_increase given (use the method you wrote in the Product class!)
# set_clearance(self, category, percent_discount) - updates all the products matching the given category by reducing the price by the percent_discount given (use the method you wrote in the Product class!)


class Store:
    def __init__(self, name, list_of_products):
        self.name = name
        self.list_of_products = []
        self.product= Product("name",10,"k")

    def add_product(self, new_product):
        self.list_of_products.append(new_product)
        return self

    def sell_product(self, id):
        self.list_of_products.pop(id)
        print("(PRODUCT SOLD)", "Product Name:",
              self.list_of_products[id].name + ", Category:",
              self.list_of_products[id].category + ", Price",
              self.list_of_products[id].price)
        return self

    def print_list(self):
        for i in range(len(self.list_of_products)):
            print(
                str(i) + ".", "Product Name:",
                self.list_of_products[i].name + ", Category:",
                self.list_of_products[i].category + ", Price",
                self.list_of_products[i].price)
        return self

    def inflation(self, percent_increase):
        self.product.update_price(percent_increase,True)
        return self


class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def print_info(self):
        print("Product Name:", self.name + ", Category:",
        self.category + ", Price", self.price)
        return self

    def update_price(self, percent_change, is_increased):
        if (is_increased):
            self.price += percent_change
        else:
            self.price -= percent_change
        return self


products = {
    "product1": Product("Python", 10, "Language"),
    'product2': Product("C++", 10, "Language"),
    'product3': Product("Java", 10, "Language"),
    'product4': Product("C#", 10, "Language"),
}

store1 = Store("CodingDojo", list)
store1.add_product(products['product1']).add_product(products['product2']).add_product(products['product3']).add_product(products['product4'])
store1.print_list().inflation(40)
# products['product1'].update_price(20,True)
