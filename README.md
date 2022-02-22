# KNOWLEGE TRANSFER DDD

## Start project:
```
yarn dev
``` 
or 
```
npm run dev
```

## Start server:
```
yarn server
``` 
or 
```
npm run server
```

## Endpoints info:
Resources:
```
http://localhost:4000/films
http://localhost:4000/people
http://localhost:4000/planets
http://localhost:4000/species
http://localhost:4000/starships
http://localhost:4000/vehicles
```
Home
```
http://localhost:4000
```
### PEOPLE
#### PEOPLE LIST
Method: GET 
```
http://localhost:4000/people
```

Response:
```
{
  data = [
    {
      "description": "A person within the Star Wars universe",
      "id": 2,
      "properties": {
        "birth_year": "112BBY",
        "created": "2022-02-19T22:36:51.281Z",
        "edited": "2022-02-19T22:36:51.281Z",
        "eye_color": "yellow",
        "gender": "n/a",
        "hair_color": "n/a",
        "height": "167",
        "homeworld": "https://www.swapi.tech/api/planets/1",
        "mass": "75",
        "name": "C-3PO",
        "skin_color": "gold",
        "url": "https://www.swapi.tech/api/people/2"
      }
    }
  ]
}
```

#### PEOPLE SELECT
Method: GET 
```
http://localhost:4000/people/:id
```

Response:
```
{
  data = {
    "description": "A person within the Star Wars universe",
    "id": 2,
    "properties": {
      "birth_year": "112BBY",
      "created": "2022-02-19T22:36:51.281Z",
      "edited": "2022-02-19T22:36:51.281Z",
      "eye_color": "yellow",
      "gender": "n/a",
      "hair_color": "n/a",
      "height": "167",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "75",
      "name": "C-3PO",
      "skin_color": "gold",
      "url": "https://www.swapi.tech/api/people/2"
    }
  }
}
```

#### PEOPLE CREATE
Method: POST 
```
http://localhost:4000/people
```

Payload:
```
{
  "description": "A person within the Star Wars universe",
  "id": 2,
  "properties": {
    "birth_year": "112BBY",
    "created": "2022-02-19T22:36:51.281Z",
    "edited": "2022-02-19T22:36:51.281Z",
    "eye_color": "yellow",
    "gender": "n/a",
    "hair_color": "n/a",
    "height": "167",
    "homeworld": "https://www.swapi.tech/api/planets/1",
    "mass": "75",
    "name": "C-3PO",
    "skin_color": "gold",
    "url": "https://www.swapi.tech/api/people/2"
  }
}
```

Response:
```
{
  "description": "A person within the Star Wars universe",
  "id": 2,
  "properties": {
    "birth_year": "112BBY",
    "created": "2022-02-19T22:36:51.281Z",
    "edited": "2022-02-19T22:36:51.281Z",
    "eye_color": "yellow",
    "gender": "n/a",
    "hair_color": "n/a",
    "height": "167",
    "homeworld": "https://www.swapi.tech/api/planets/1",
    "mass": "75",
    "name": "C-3PO",
    "skin_color": "gold",
    "url": "https://www.swapi.tech/api/people/2"
  }
}
```

#### PEOPLE REMOVE
Method: DELETE
```
http://localhost:4000/people/:id
```

#### PEOPLE UPDATE
Method: PATCH
```
http://localhost:4000/people/:id
```

Payload:
```
{
  "description": "A person within the Star Wars universe",
  "id": 2,
  "properties": {
    "birth_year": "112BBY",
    "created": "2022-02-19T22:36:51.281Z",
    "edited": "2022-02-19T22:36:51.281Z",
    "eye_color": "yellow",
    "gender": "n/a",
    "hair_color": "n/a",
    "height": "167",
    "homeworld": "https://www.swapi.tech/api/planets/1",
    "mass": "75",
    "name": "C-3PO",
    "skin_color": "gold",
    "url": "https://www.swapi.tech/api/people/2"
  }
}
```

Response:
```
{
  "description": "A person within the Star Wars universe",
  "id": 2,
  "properties": {
    "birth_year": "112BBY",
    "created": "2022-02-19T22:36:51.281Z",
    "edited": "2022-02-19T22:36:51.281Z",
    "eye_color": "yellow",
    "gender": "n/a",
    "hair_color": "n/a",
    "height": "167",
    "homeworld": "https://www.swapi.tech/api/planets/1",
    "mass": "75",
    "name": "C-3PO",
    "skin_color": "gold",
    "url": "https://www.swapi.tech/api/people/2"
  }
}
```