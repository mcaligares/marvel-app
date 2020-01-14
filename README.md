# Marvel App

### Available users

- parker@email.com
- stark@email.com
- rogers@email.com
- banner@email.com

### Password

```
elvencera
```

## API

### Authentication

**POST** /api/auth

**Body**
``` json
{
  "username": USERNAME,
  "password": PASSWORD
}
```

### Movies

**GET** /api/movies

**Header**

``` json
{
  "Authentication": AUTHORIZATION_TOKEN
}
```