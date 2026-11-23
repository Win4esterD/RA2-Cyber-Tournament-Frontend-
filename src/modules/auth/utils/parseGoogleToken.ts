export function parseGoogleToken() {
  if (typeof window === 'undefined') return null;

  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const extractedToken = params.get('token');
  return extractedToken;
}
