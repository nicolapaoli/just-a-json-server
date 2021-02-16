# JUST A JSON SERVER

This is a simple implementation of a JSON Server to provide dummy or mock data for testing or development purpose.

## USAGE

### 1. CONFIG

Put your data in the file [data.json](./data.json).

The property of the root element will be your endpoints.

### 2. START

Start the server

```
npm i && npm start
```

You will get your data on port `3000`.

## EXAMPLE

example of `data.json`:

```
{
    "info": {
        "version": "1.0.0"
    },
    "users": [{
        "id": 123,
        "firstname": "Nicola",
        "lastname": "Paoli"
    }]
}
```

This configuration Will create the following endpoints:

http://localhost:3000/info

> {"version": "1.0.0"}

http://localhost:3000/users

> [{"id":123,"firstname":"Nicola","lastname":"Paoli"}]
