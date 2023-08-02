import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  PORT: string;
  HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  SECRET_KEY: string;
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
  CLOUDINARY_URL: string;
  SENDER_EMAIL: string;
  SENDER_CLIENT_ID: string;
  SENDER_CLIENT_SECRET: string;
  SENDER_ACCESS_TOKEN: string;
  SENDER_REFRESH_TOKEN: string;
  NODE_ENV: 'DEVELOPMENT' | 'PRODUCTION';
  // SECRETKEY: string | undefined;
  // your enviroment variables declared like the commented line above
}

interface Config {
  PORT: string;
  HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  SECRET_KEY: string;
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
  CLOUDINARY_URL: string;
  SENDER_EMAIL: string;
  SENDER_CLIENT_ID: string;
  SENDER_CLIENT_SECRET: string;
  SENDER_ACCESS_TOKEN: string;
  SENDER_REFRESH_TOKEN: string;
  NODE_ENV: 'DEVELOPMENT' | 'PRODUCTION';
  // SECRETKEY: string;
  // Again your enviroments variables declared like the commented line above
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USERNAME: process.env.DB_USERNAME,
    SECRET_KEY: process.env.SECRET_KEY,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    SENDER_CLIENT_ID: process.env.SENDER_CLIENT_ID,
    SENDER_CLIENT_SECRET: process.env.SENDER_CLIENT_SECRET,
    SENDER_ACCESS_TOKEN: process.env.SENDER_ACCESS_TOKEN,
    SENDER_REFRESH_TOKEN: process.env.SENDER_REFRESH_TOKEN,
    NODE_ENV: process.env.NODE_ENV
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
