# Node.js Project

This is a Node.js project that uses Express.js, StandardJS, Docker Compose.

## Getting Started

To get started, clone the repository:

```bash
git clone https://github.com/chri5bot/toolbox-backend.git
cd toolbox-backend
```

### Prerequisites

To run this project, you will need to have Node.js and Docker installed on your computer.

### Installing

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory of the project and add your secrets:

   ```bash
   PORT=3000
   EXTERNAL_API=https://echo-serv.tbxnet.com/v1/secret/
   EXTERNAL_API_KEY=aSuperSecretKey
   ```

### Running the Tests

To run the tests, use the following command:

```bash
npm test
```

### Running the App

To run the app, use the following command:

```bash
npm start
```

### Docker Compose

To run the app using Docker Compose, use the following command:

```bash
docker-compose up
```

### API

#### GET /files/list

Returns a list of files.

**Headers**

- `Authorization: Bearer aSuperSecretKey`

**Response**

```json
{
  "files": [
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test18.csv",
    "test4.csv",
    "test5.csv",
    "test6.csv",
    "test9.csv",
    "test15.csv"
  ]
}
```

#### GET /file/:filename

Returns file data.

**Headers**

- `Authorization: Bearer aSuperSecretKey`

**Response**

```json
[
  {
    "file": "test18.csv",
    "text": "sItLiqObkUEQVtJdtcGRnUWFjxtV",
    "number": 875351790,
    "hex": "jz385a8cf05596c32a715c94924a9f"
  },
  {
    "file": "test18.csv",
    "text": "avuLdlpGODfoUr",
    "number": 2345286655,
    "hex": "jz0e2e0901c65df60c2f05c87fbca1"
  },
  {
    "file": "test18.csv",
    "text": "QelMiEQlVFzlLtEYp",
    "number": 223,
    "hex": "jzac6f82a2eff5ad8129aa4301b69b"
  },
  {
    "file": "test18.csv",
    "text": "UqmOFUGCkV",
    "number": 6004669,
    "hex": "jz33aa31f87a027aada6949ad057f6"
  },
  {
    "file": "test18.csv",
    "text": "HJP",
    "number": 6691076,
    "hex": "jz3e8372f4f6bce306e69af27666be"
  }
]
```

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [StandardJS](https://standardjs.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Authors

- Christian Torres <chris.torres.dev@gmail.com>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
