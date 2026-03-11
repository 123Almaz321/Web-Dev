from models import Vehicle, Car, Motorcycle

def main():
    year = 2026
    
    camry = Car("Toyota", "Camry", 2022, "Gasoline")
    tesla = Car("Tesla", "Model 3", 2023, "E-fuel")
    bmw = Motorcycle("BMW", "R1250GS", 2021, False)
    ural = Motorcycle("Ural", "Gear Up", 2020, True)

    fleet = [camry, tesla, bmw, ural]

    for vehicle in fleet:
        print(f"Transport: {vehicle}")
        print(f"Age: {vehicle.get_age(year)} years")
        
        print(f"Action: {vehicle.start_engine()}")
        
        if isinstance(vehicle, Car):
            print(f"In addition: {vehicle.open_trunk()}")
        elif isinstance(vehicle, Motorcycle):
            print(f"In addition: {vehicle.wheelie()}")
        

if __name__ == "__main__":
    main()