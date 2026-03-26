class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"Vehicle {self.brand} is working now."

    def get_age(self, current_year):
        return current_year - self.year

    def to_dict(self):
        return {
            "type": self.__class__.__name__,
            "brand": self.brand,
            "model": self.model,
            "year": self.year,
        }

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        
        if not isinstance(year, int):
            raise TypeError(f"'year' must be an int, got {type(year).__name__}")
        
        if not isinstance(fuel_type, str):
            raise TypeError(f"'fuel_type' must be a str, got {type(fuel_type).__name__}")
        
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def start_engine(self):
        return f"A car {self.brand} {self.model} using {self.fuel_type}."

    def open_trunk(self):
        return "The trunk is open."

    def to_dict(self):
        data = super().to_dict()
        data["fuel_type"] = self.fuel_type
        return data

    def from_dict(cls, data):
        return cls(data["brand"], data["model"], data["year"], data["fuel_type"])


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        if not isinstance(year, int):
            raise TypeError(f"'year' must be an int, got {type(year).__name__}")
        
        if not isinstance(has_sidecar, bool):
            raise TypeError(f"'has_sidecar' must be a bool, got {type(has_sidecar).__name__}")
        
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def start_engine(self):
        return f"Motorcycle {self.brand} {self.model} starts."

    def wheelie(self):
        if not self.has_sidecar:
            return "Moto is up on the back wheel!"
        return "Can't do a wheelie with a sidecar."

    def to_dict(self):
        data = super().to_dict()
        data["has_sidecar"] = self.has_sidecar
        return data

    def from_dict(cls, data):
        return cls(data["brand"], data["model"], data["year"], data["has_sidecar"])