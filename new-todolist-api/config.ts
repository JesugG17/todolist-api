import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  // SECRETKEY: string | undefined;
  // your enviroment variables declared like the commented line above
}

interface Config {
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  // SECRETKEY: string;
  // Again your enviroments variables declared like the commented line above
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USERNAME: process.env.DB_USERNAME,
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
