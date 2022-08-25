import { getCustomIdAndRefreshTokens } from 'src/firebaseAdmin'
import { setCookie } from 'src/cookies'
import {
  getAuthUserCookieName,
  getAuthUserTokensCookieName,
} from 'src/authCookies'
import { getConfig } from 'src/config'

const setAuthCookies = async (req, res, { token: userProvidedToken } = {}) => {
  // This should be the original Firebase ID token from
  // the Firebase JS SDK.
  const token = userProvidedToken || req.headers.authorization
  if (!token) {
    throw new Error(
      'The request must have an Authorization header value, or you should explicitly provide an ID token to "setAuthCookies".'
    )
  }

  // Get a custom ID token and refresh token, given a valid
  // Firebase ID token.
  const { idToken, refreshToken, AuthUser } = await getCustomIdAndRefreshTokens(
    token
  )

  const { unified, name } = getConfig().cookies

  // Pick a subset of the config.cookies options to
  // pass to setCookie.
  const cookieOptions = (({
    domain,
    httpOnly,
    keys,
    maxAge,
    overwrite,
    path,
    sameSite,
    secure,
    signed,
  }) => ({
    domain,
    httpOnly,
    keys,
    maxAge,
    overwrite,
    path,
    sameSite,
    secure,
    signed,
  }))(getConfig().cookies)

  if (!unified) {
    // Store the ID and refresh tokens in a cookie. This
    // cookie will be available to future requests to pages,
    // providing a valid Firebase ID token (refreshed as needed)
    // for server-side rendering.
    setCookie(
      getAuthUserTokensCookieName(),
      // Note: any change to cookie data structure needs to be
      // backwards-compatible.
      JSON.stringify({
        idToken,
        refreshToken,
      }),
      { req, res },
      cookieOptions
    )

    // Store the AuthUser data. This cookie will be available
    // to future requests to pages, providing the user data. It
    // will *not* include a Firebase ID token, because it may have
    // expired, but provides the AuthUser data without any
    // additional server-side requests.
    setCookie(
      getAuthUserCookieName(),
      // Note: any change to cookie data structure needs to be
      // backwards-compatible.
      // Don't include the token in the "AuthUser" cookie, because
      // the token should only be used from the "AuthUserTokens"
      // cookie. Here, it is redundant information, and we don't
      // want the token to be used if it's expired.
      AuthUser.serialize({ includeToken: false }),
      {
        req,
        res,
      },
      cookieOptions
    )
  } else {
    setCookie(
      name,
      `${JSON.stringify({ idToken, refreshToken })}|-|{}`,
      { req, res },
      cookieOptions
    )
  }
  return {
    idToken,
    refreshToken,
    AuthUser,
  }
}

export default setAuthCookies
