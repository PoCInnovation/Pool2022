# Artist-Book

A simple Node REST API to manage artists and musics :rocket:

## Getting started

Run the following commands :
```bash
# Copy the required env variables inside the file .env
cp .envrc.example .envrc

###
# Please update the .env file before going further !
###

# To make sure your environment variables are loaded
direnv allow .

# Build the API images and start the containers
docker-compose up

# Check if the server is running : you should get "Success"
curl -s http://localhost:8080/health | grep "Up" > /dev/null && echo "Success" || echo "Failure"

# Open the Visual Database Interface
xdg-open http://localhost:5555
```

## Entities

### User

- `id` :          **String**
- `email` :       **String**
- `password` :    **String**
- `artists` :     **Artist[]**

### Artist

- `id` :          **String**
- `name` :        **String**
- `rating` :      **Int**
- `nationality` : **String**
- `musicGender` : **String**
- `photoUrl` :    **String**
- `musics` :      **Music[]**
- `user` :        **User**
- `userId` :      **String**

### Music

- `id` :          **String**
- `name` :        **String**
- `rating` :      **Int**
- `url` :         **String**
- `artist` :      **Artist**
- `artistId` :    **String**

## HTTP Routes

### Check state

**Endpoint** : `/health`\
**Method**: `GET`\
**Return**
  - **200**: OK

### Register

**Endpoint** : `xxx/auth/register`\
**Method**: `POST`\
```json
{
    "email": "xxx@xxx.xxx",
    "password": "xxxxx"
}
```
**Return**
  - **201**: Created
  - **400**: Bad request
  - **409**: Email already used
  - **500**: Internal server error

### Login

**Endpoint** : `xxx/auth/login`\
**Method**: `POST`\
**Body**:
```json
{
    "email": "xxx@xxx.xxx",
    "password": "xxxxx"
}
```
**Return**
  - **200**: Accepted
  - **400**: Bad request
  - **500**: Internal server error

### Get User

**Endpoint** : `xxx/user`\
**Method**: `GET`\
**Header**: `accessToken`\
**Return**
  - **200**: OK
  - **403**: Forbidden
  - **500**: Internal server error

### Create Artist

**Endpoint** : `xxx/artist`\
**Method**: `POST`\
**Header**: `accessToken`\
**Body**:
```json
{
    "name": "xxx",
    "rating": 0,
    "nationality": "xxx",
    "musicGender": "xxx",
    "photoUrl": "xxx"
}
```
**Return**
  - **201**: Created
  - **400**: Bad request
  - **403**: Forbidden
  - **409**: Name already used
  - **500**: Internal server error

### Get Artist

**Endpoint** : `xxx/artist/:artistId`\
**Method**: `GET`\
**Header**: `accessToken`\
**Return**
  - **200**: OK
  - **400**: Bad request
  - **403**: Forbidden
  - **500**: Internal server error

### Create Music

**Endpoint** : `xxx/artist/:artistId/music`\
**Method**: `POST`\
**Header**: `accessToken`\
**Body**:
```json
{
    "name": "xxx",
    "rating": 0,
    "url": "xxx"
}
```
**Return**
  - **201**: Created
  - **400**: Bad request
  - **403**: Forbidden
  - **500**: Internal server error
