import json
from models import Vehicle, Car, Motorcycle

DATA_FILE = "data.json"
CURRENT_YEAR = 2026

VEHICLE_CLASSES = {
    "Car": Car,
    "Motorcycle": Motorcycle,
}



def save_fleet(fleet, filename=DATA_FILE):
    records = [vehicle.to_dict() for vehicle in fleet]
    try:
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(records, f, indent=4, ensure_ascii=False)
        print(f"[OK] Fleet saved to '{filename}' ({len(records)} vehicles).")

    except OSError as e:
        print(f"[Error] Could not write to '{filename}': {e}")

    finally:
        print("[save_fleet] Save attempt finished.\n")


def load_fleet(filename=DATA_FILE):
    fleet = []
    try:
        with open(filename, "r", encoding="utf-8") as f:
            records = json.load(f)

        for record in records:
            vehicle_type = record.get("type")
            cls = VEHICLE_CLASSES.get(vehicle_type)

            if cls is None:
                raise ValueError(
                    f"Unknown vehicle type '{vehicle_type}'. "
                    f"Expected one of: {list(VEHICLE_CLASSES.keys())}"
                )

            fleet.append(cls.from_dict(record))

        print(f"[OK] Loaded {len(fleet)} vehicles from '{filename}'.\n")

    except FileNotFoundError:
        print(
            f"[Error] File '{filename}' not found. "
            "Run the program once to generate it.\n"
        )
    except json.JSONDecodeError as e:
        print(f"[Error] '{filename}' contains invalid JSON: {e}\n")

    except ValueError as e:
        print(f"[Error] Data problem while loading fleet: {e}\n")

    except TypeError as e:
        print(f"[Error] Type mismatch while recreating object: {e}\n")

    finally:
        print("[Load] Load attempt finished.\n")

    return fleet



def display_fleet(fleet):
    if not fleet:
        print("  (fleet is empty)\n")
        return

    for vehicle in fleet:
        print(f"  Transport : {vehicle}")
        print(f"  Age       : {vehicle.get_age(CURRENT_YEAR)} years")
        print(f"  Action    : {vehicle.start_engine()}")

        if isinstance(vehicle, Car):
            print(f"  Extra     : {vehicle.open_trunk()}")

        elif isinstance(vehicle, Motorcycle):
            print(f"  Extra     : {vehicle.wheelie()}")

        print()



def main():
    print("1)Build fleet\n")

    try:
        camry  = Car("Toyota", "Camry",    2022, "Gasoline")
        tesla  = Car("Tesla",  "Model 3",  2023, "Electric")
        bmw    = Motorcycle("BMW",  "R1250GS", 2021, False)
        ural   = Motorcycle("Ural", "Gear Up", 2020, True)
    except TypeError as e:
        print(f"[Error] Could not create vehicle: {e}")
        return

    fleet = [camry, tesla, bmw, ural]
    display_fleet(fleet)

    print("\n2)Save fleet to JSON\n")
    save_fleet(fleet)

    print("\n3)Load fleet from JSON\n")

    loaded_fleet = load_fleet()
    display_fleet(loaded_fleet)

    print("\n4)Analysis with list comprehensions\n")

    old_vehicles = [v for v in loaded_fleet if v.get_age(CURRENT_YEAR) > 3]
    print(f"Vehicles older than 3 years ({len(old_vehicles)}):")
    for v in old_vehicles:
        print(f"    • {v}  —  {v.get_age(CURRENT_YEAR)} yrs")

    print()

    electric_cars = [
        v for v in loaded_fleet
        if isinstance(v, Car) and v.fuel_type.lower() in ("electric", "e-fuel")
    ]
    print(f"Electric / E-fuel cars ({len(electric_cars)}):")
    for v in electric_cars:
        print(f"    • {v}  —  fuel: {v.fuel_type}")

    print()

    sidecar_bikes = [v for v in loaded_fleet if isinstance(v, Motorcycle) and v.has_sidecar]
    print(f"Motorcycles with sidecars ({len(sidecar_bikes)}):")
    for v in sidecar_bikes:
        print(f"    • {v}")

    print()

    print("\n5)FileNotFoundError handling\n")
    load_fleet("nonexistent_file.json")



main()