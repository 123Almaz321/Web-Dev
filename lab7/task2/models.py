class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"Vehicle {self.brand} is working now."

    def get_age(self, current_year):
        return current_year - self.year

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def start_engine(self):
        return f"A car {self.brand} {self.model} using a {self.fuel_type}."

    def open_trunk(self):
        return "The back is opened"


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def start_engine(self):
        return f"Motorcycle {self.brand} starts"

    def wheelie(self):
        if not self.has_sidecar:
            return "Moto is on the back wheel"
        return "No way you can do it"