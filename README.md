# KNOWLEGE TRANSFER DDD 🚸
<em>Project lab to practice DDD applied architecture in front-end</em>
## Start project:
`yarn dev` or `npm run dev`
## Start server:
`yarn server` or `npm run server`
## Endpoints info:
Home:
```
http://localhost:4000
```
Resources:
```
http://localhost:4000/films
http://localhost:4000/people
http://localhost:4000/planets
http://localhost:4000/species
http://localhost:4000/starships
http://localhost:4000/vehicles
```

### PEOPLE
#### PEOPLE LIST
Method: <span style="background-color:green;padding-left:3px;padding-right:3px;border-radius:2px;">`GET`</span>
```
http://localhost:4000/people
```

Payload:
```
{
  {
    "description": string,
    "id": number,
    "properties": {
      "birth_year": string,
      "created": string,
      "edited": string,
      "eye_color": "yellow" | "yellow" | "brown" | "blue" | "blue-gray" | "blue",
      "gender": "n/a" | "male" | "female",
      "hair_color": "blond" | "n/a" | "none" | "brown" | "brown, grey" | "auburn, white" | "white" | "black",
      "height": "167",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "75",
      "name": "C-3PO",
      "skin_color": "gold" | "dark" | "light" | "fair" | "green" | "white" | "unknown" | "white, blue", ,
      "url": "https://www.swapi.tech/api/people/2"
    }
  }
}
```

Response:
```
{
  {
    "description": "A person within the Star Wars universe",
    "id": 1,
    "properties": {
      "birth_year": "19BBY",
      "created": "2022-02-19T22:36:51.281Z",
      "edited": "2022-02-19T22:36:51.281Z",
      "eye_color": "blue",
      "gender": "male",
      "hair_color": "blond",
      "height": "172",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "fair",
      "url": "https://www.swapi.tech/api/people/1"
    }
  }
}
```

#### PEOPLE SELECT
Method: <span style="background-color:green;padding-left:3px;padding-right:3px;border-radius:2px;">`GET`</span>
```
http://localhost:4000/people/:id
```

Payload:
```
{
  {
    "description": string,
    "id": number,
    "properties": {
      "birth_year": string,
      "created": string,
      "edited": string,
      "eye_color": "yellow" | "yellow" | "brown" | "blue" | "blue-gray" | "blue",
      "gender": "n/a" | "male" | "female",
      "hair_color": "blond" | "n/a" | "none" | "brown" | "brown, grey" | "auburn, white" | "white" | "black",
      "height": "167",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "75",
      "name": "C-3PO",
      "skin_color": "gold" | "dark" | "light" | "fair" | "green" | "white" | "unknown" | "white, blue", ,
      "url": "https://www.swapi.tech/api/people/2"
    }
  }
}
```

Response:
```
{
  {
    "description": "A person within the Star Wars universe",
    "id": 1,
    "properties": {
      "birth_year": "19BBY",
      "created": "2022-02-19T22:36:51.281Z",
      "edited": "2022-02-19T22:36:51.281Z",
      "eye_color": "blue",
      "gender": "male",
      "hair_color": "blond",
      "height": "172",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "fair",
      "url": "https://www.swapi.tech/api/people/1"
    }
  }
}
```

#### PEOPLE CREATE
Method: <span style="background-color:green;padding-left:3px;padding-right:3px;border-radius:2px;">`POST`</span>
```
http://localhost:4000/people
```

Payload:
```
{
  {
    "description": string,
    "id": number,
    "properties": {
      "birth_year": string,
      "created": string,
      "edited": string,
      "eye_color": "yellow" | "yellow" | "brown" | "blue" | "blue-gray" | "blue",
      "gender": "n/a" | "male" | "female",
      "hair_color": "blond" | "n/a" | "none" | "brown" | "brown, grey" | "auburn, white" | "white" | "black",
      "height": "167",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "75",
      "name": "C-3PO",
      "skin_color": "gold" | "dark" | "light" | "fair" | "green" | "white" | "unknown" | "white, blue", ,
      "url": "https://www.swapi.tech/api/people/2"
    }
  }
}
```

Response:
```
{
  {
    "description": "A person within the Star Wars universe",
    "id": 1,
    "properties": {
      "birth_year": "19BBY",
      "created": "2022-02-19T22:36:51.281Z",
      "edited": "2022-02-19T22:36:51.281Z",
      "eye_color": "blue",
      "gender": "male",
      "hair_color": "blond",
      "height": "172",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "fair",
      "url": "https://www.swapi.tech/api/people/1"
    }
  }
}
```

#### PEOPLE REMOVE
Method: <span style="background-color:green;padding-left:3px;padding-right:3px;border-radius:2px;">`DELETE`</span>
```
http://localhost:4000/people/:id
```
Response:
```
{}
```

#### PEOPLE UPDATE
Method: Method: <span style="background-color:green;padding-left:3px;padding-right:3px;border-radius:2px;">`PATCH`</span>
```
http://localhost:4000/people/:id
```

Payload:
```
{
  {
    "description": string,
    "id": number,
    "properties": {
      "birth_year": string,
      "created": string,
      "edited": string,
      "eye_color": "yellow" | "yellow" | "brown" | "blue" | "blue-gray" | "blue",
      "gender": "n/a" | "male" | "female",
      "hair_color": "blond" | "n/a" | "none" | "brown" | "brown, grey" | "auburn, white" | "white" | "black",
      "height": "167",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "75",
      "name": "C-3PO",
      "skin_color": "gold" | "dark" | "light" | "fair" | "green" | "white" | "unknown" | "white, blue", ,
      "url": "https://www.swapi.tech/api/people/2"
    }
  }
}
```

Response:
```
{
  {
    "description": "A person within the Star Wars universe",
    "id": 1,
    "properties": {
      "birth_year": "19BBY",
      "created": "2022-02-19T22:36:51.281Z",
      "edited": "2022-02-19T22:36:51.281Z",
      "eye_color": "blue",
      "gender": "male",
      "hair_color": "blond",
      "height": "172",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "fair",
      "url": "https://www.swapi.tech/api/people/1"
    }
  }
}
```

### FILMS
Method: <span style="background-color:green;padding-left:3px;padding-right:3px;border-radius:2px;">`GET`</span>
```
http://localhost:4000/films/:id
```

Payload:
```
{
  {
    "description": "A Star Wars Film",
    "id": number,
    "properties": {
      "created": string,
      "director": string,
      "edited": string,
      "episode_id": number,
      "opening_crawl": string,
      "release_date": string,
      "title": string,
      "url": string,
    }
  }
}
```

Response:
```
{
  {
    "description": "A Star Wars Film",
    "id": 1,
    "properties": {
      "created": "2022-02-19T22:36:51.269Z",
      "director": "George Lucas",
      "edited": "2022-02-19T22:36:51.269Z",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "title": "A New Hope",
      "url": "https://www.swapi.tech/api/films/1"
    }
  }
}
```

...Visit server resources to more info on the rest of the endspoints.
