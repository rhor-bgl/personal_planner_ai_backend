import Apple from "@auth/express/providers/apple"
import Auth0 from "@auth/express/providers/auth0"
import AzureB2C from "@auth/express/providers/azure-ad-b2c"
import BoxyHQSAML from "@auth/express/providers/boxyhq-saml"
import Cognito from "@auth/express/providers/cognito"
import Coinbase from "@auth/express/providers/coinbase"
import Discord from "@auth/express/providers/discord"
import Dropbox from "@auth/express/providers/dropbox"
import Facebook from "@auth/express/providers/facebook"
import GitHub from "@auth/express/providers/github"
import GitLab from "@auth/express/providers/gitlab"
import Google from "@auth/express/providers/google"
import Hubspot from "@auth/express/providers/hubspot"
import Keycloak from "@auth/express/providers/keycloak"
import LinkedIn from "@auth/express/providers/linkedin"
import Netlify from "@auth/express/providers/netlify"
import Okta from "@auth/express/providers/okta"
import Passage from "@auth/express/providers/passage"
import Pinterest from "@auth/express/providers/pinterest"
import Reddit from "@auth/express/providers/reddit"
import Slack from "@auth/express/providers/slack"
import Spotify from "@auth/express/providers/spotify"
import Twitch from "@auth/express/providers/twitch"
import Twitter from "@auth/express/providers/twitter"
import WorkOS from "@auth/express/providers/workos"
import Zoom from "@auth/express/providers/zoom"

export const authConfig = {
  secret: "asdadasfsetrwe",
  trustHost: true,
  providers: [
    Cognito({
      clientId: "1kg5l8shnj9r1udsbiqq3rq7sp",
      clientSecret: "1v5so80uic7bp1ce7456qrds4na3f0n7oulu9g5d9p1bo3ls721j",
      issuer: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_9aKP7VZWt",
    })
  ],
}
