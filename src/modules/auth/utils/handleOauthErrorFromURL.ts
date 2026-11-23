export function handleOAuthErrorFromURL(): string | null {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  const error = url.searchParams.get('oauth_error');
  if (error) {
    // Clean up 'oauth_error' from the query parameters without reloading
    url.searchParams.delete('oauth_error');
    window.history.replaceState(null, '', url.pathname + (url.search || '') + url.hash);
  }
  return error;
}
