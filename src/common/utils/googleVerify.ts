import { OAuth2Client, TokenPayload } from "google-auth-library"
import config from '../../../config';

const client = new OAuth2Client(config.GOOGLE_ID, config.GOOGLE_SECRET, 'postmessage');

export const googleVerify = async(code: string)  => {
    try {

        const { tokens } = await client.getToken(code);
        
        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token as string,
            audience: config.GOOGLE_ID
        });

        const { name, picture, email } = ticket.getPayload() as TokenPayload;

        return {
            ok: true,
            name,
            picture,
            email
        }
    } catch (error) {
        return {
            ok: false
        }
    }

}