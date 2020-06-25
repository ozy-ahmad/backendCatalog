# Flickr clone

## CRUD api still on going

- Database API-Schema

### Auth

| Method | endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| POST   | `/users/register` | register with new user data |
| POST   | `/users/login`    | login with new user data    |

| Field register  |
| --------------- |
| name            |
| email           |
| password        |
| confirmPassword |

| Field login |
| ----------- |
| email       |
| password    |

### Users

| Method | endpoint              | Description  |
| ------ | --------------------- | ------------ |
| GET    | `/users/get`          | get all      |
| GET    | `/users/get/:usersId` | get by:id    |
| GET    | `/delete/:usersId`    | delete users |

### Photo Scheme

| Method | endpoint           | Description    |
| ------ | ------------------ | -------------- |
| GET    | `/photo/getPhoto`  | get photo data |
| POST   | `/photo/postPhoto` | post photo     |

| Field users  |
| ------------ |
| fileName     |
| image        |
| senderUserId |
