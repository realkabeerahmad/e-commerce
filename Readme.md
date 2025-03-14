# E-Commerce API

This project is a simple E-Commerce service built with Node.js and TypeScript.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:realkabeerahmad/e-commerce.git
   cd e-commerce/server-app/
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project

#### Production Mode

To start the project in production mode:

```sh
npm start
```

#### Development Mode

To run the project in development mode:

1. Create a `nodemon.json` file with the following content:
   ```json
   {
     "watch": ["src"],
     "ext": ".ts,.js",
     "exec": "ts-node ./src/server.ts"
   }
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

---

#### Enviornment Variables

To run the project following enviorment variable are required:

```env
PORT="5000"
CORS_ORIGIN="CORS_ORIGIN_URL"
MASTER_CONN_STR="MASTER_DB_STRING"
```

---

## 📌 API Endpoints

### Base URL (Localhost)

```
http://127.0.0.1:5001/api/
```

### **1. Create a Store**

**Endpoint:** `POST /store/`

#### **Request Body**

```json
{
  "name": "Store Name",
  "description": "Store Description",
  "address": {
    "street": "Store Address",
    "city": "LHR",
    "state": "PU",
    "country": "PK",
    "zipCode": "54001"
  },
  "phone": "03000000000",
  "email": "username@example.com",
  "totalSales": 0
}
```

#### **Response**

```json
{
  "status": 201,
  "message": "New store 'Store Name' created successfully!",
  "data": {
    "name": "Store Name",
    "description": "Store Description",
    "address": {
      "street": "Store Address",
      "city": "LHR",
      "state": "PU",
      "country": "PK",
      "zipCode": "54001"
    },
    "phone": "03000000000",
    "email": "username@example.com",
    "totalSales": 0,
    "_id": "67d4037bfa677badcc3773bf",
    "createdAt": "2025-03-14T10:22:51.761Z",
    "updatedAt": "2025-03-14T10:22:51.761Z",
    "__v": 0
  }
}
```

---

### **2. Retrieve All Stores**

**Endpoint:** `GET /store/`

#### **Request**

_No request body required._

#### **Response**

```json
{
  "status": 200,
  "message": "All stores fetched successfully",
  "data": [
    {
      "address": {
        "street": "Store Address",
        "city": "LHR",
        "state": "PU",
        "country": "PK",
        "zipCode": "54001"
      },
      "_id": "67d4037bfa677badcc3773bf",
      "name": "Store Name",
      "description": "Store Description",
      "phone": "03000000000",
      "email": "username@example.com",
      "totalSales": 0,
      "createdAt": "2025-03-14T10:22:51.761Z",
      "updatedAt": "2025-03-14T10:22:51.761Z",
      "__v": 0
    }
  ]
}
```

---

### **3. Retrive Store by ID**

**Endpoint:** `GET /store/:_id`

#### **Request**

_No request body required._

#### **Response**

```json
{
  "status": 200,
  "message": "Store found successfully",
  "data": {
    "address": {
      "street": "Store Address",
      "city": "LHR",
      "state": "PU",
      "country": "PK",
      "zipCode": "54001"
    },
    "_id": "67d4037bfa677badcc3773bf",
    "name": "Store Name",
    "description": "Store Description",
    "phone": "03000000000",
    "email": "username@example.com",
    "totalSales": 0,
    "createdAt": "2025-03-14T10:22:51.761Z",
    "updatedAt": "2025-03-14T10:22:51.761Z",
    "__v": 0
  }
}
```

---

### **4. Delete a Store**

**Endpoint:** `DELETE /store/:_id`

#### **Request**

_No request body required._

#### **Response**

```json
{
  "status": 200,
  "message": "Store deleted successfully",
  "data": {
    "address": {
      "street": "Store Address",
      "city": "LHR",
      "state": "PU",
      "country": "PK",
      "zipCode": "54001"
    },
    "_id": "67d4037bfa677badcc3773bf",
    "name": "Store Name",
    "description": "Store Description",
    "phone": "03000000000",
    "email": "username@example.com",
    "totalSales": 0,
    "createdAt": "2025-03-14T10:22:51.761Z",
    "updatedAt": "2025-03-14T10:22:51.761Z",
    "__v": 0
  }
}
```

---

## 🛠 Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB

## 📌 Notes

- Ensure MongoDB is running before starting the project.
- Update `.env` file to configure database connection.

## 📜 License

This project is licensed under the MIT License.
