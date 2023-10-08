
# GraphQL CRUD Project

This project implements a GraphQL API for managing users. It provides mutations for creating, updating, and removing users.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Schema](#schema)
- [Example Queries and Mutations](#example-queries-and-mutations)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/seghodavid/graphql-crud
   ```

2. Install the necessary dependencies:

   ```bash
   cd graphql-project
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Usage

After following the installation steps, you can access the GraphQL API at `http://localhost:4000/graphql`. Use a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to make HTTP requests to this endpoint.

## Schema

The GraphQL schema defines the types and operations supported by the API. Here are the main types and operations:

### Types

- `User`
  - `id: String!`
  - `name: String!`

### Mutations

- `post(id: String!, name: String!): User!`
  - Creates a new user.

- `update(id: String!, name: String!, newId: String!, newName: String!): String!`
  - Updates an existing user.

- `remove(id: String!, name: String!): String!`
  - Removes a user.

## Example Queries and Mutations

Here are some example queries and mutations you can use with this API:

### Create a User

```graphql
mutation {
  post(id: "2", name: "Samuel") {
    id
    name
  }
}
```

### Update a User

```graphql
mutation {
  update(id: "2", name: "Samuel", newId: "3", newName: "John")
}
```

### Remove a User

```graphql
mutation {
  remove(id: "3", name: "John")
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

---
