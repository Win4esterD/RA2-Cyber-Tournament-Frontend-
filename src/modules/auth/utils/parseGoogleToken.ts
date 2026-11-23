export function parseGoogleToken() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const extractedToken = params.get('token');
  return extractedToken;
}
