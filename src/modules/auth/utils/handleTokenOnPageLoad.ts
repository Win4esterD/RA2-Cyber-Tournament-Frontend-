import Cookies from 'js-cookie';
import { parseGoogleToken } from '@/modules/auth/utils/parseGoogleToken';
import { tokenName, tokenStoragePeriod } from '@/modules/auth/consts';

export function handleTokenOnPageLoad() {
  if (typeof window === 'undefined') return null;

  const token = Cookies.get(tokenName);
  const googleToken = parseGoogleToken();
  const authToken = token || googleToken;

  if (!authToken) return null;

  if (googleToken) {
    Cookies.set(tokenName, authToken, {
      sameSite: 'lax',
      expires: tokenStoragePeriod,
      secure: process.env.NODE_ENV === 'production',
    });
  }

  return authToken;
}
