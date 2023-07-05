import jwt_decode from 'jwt-decode';

type JWTProps = {
    [key: string]: any;
    exp: number;
    iat: number;
}

export function isTokenExpired(token: string) {
  var decoded = jwt_decode<JWTProps>(token);

  if (decoded.exp < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
}
