export function parseToken(token: string): Record<string, any> {
  if(!token) {
    return {};
  }

  const tokenString = token.split('.')[1];

  console.log(tokenString);

  return JSON.parse(atob(tokenString));
}
