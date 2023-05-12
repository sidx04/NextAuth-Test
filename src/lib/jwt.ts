import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOptions {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOptions = {
  expiresIn: "1h",
};

export function signJwtAcessToken(
  payload: JwtPayload,
  options: SignOptions = DEFAULT_SIGN_OPTION
) {
  const key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, key!, options);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, key!);
    return decoded as JwtPayload;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}
