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
   SECRET=aSuperSecretKey
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

#### GET /v1/secret/files

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

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [StandardJS](https://standardjs.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Authors

- Christian Torres <chris.torres.dev@gmail.com>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
