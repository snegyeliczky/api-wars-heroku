import json
import requests

response = requests.get('https://swapi.co/api/planets').json()
readable_planets = json.dumps(response, indent=2)

planets = response['results']
for planet in planets:
    print(planet['name'])

let headers = ["name", "diameter", "climate", "terrain", "surface_water", "population"]

for ()