export function removeGoogleAuthTokenFromURLAdress() {
  if (typeof window !== 'undefined' && window.location.hash.includes('token=')) {
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search,
    );
  }
}
