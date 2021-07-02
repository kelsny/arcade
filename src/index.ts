import AeroClient from "@aeroware/aeroclient";
import { config } from "dotenv";
config({ path: "src/.env" })

// create a client with default settings and commands
const client = new AeroClient({
    token: process.env.TOKEN,
    prefix: "!",
    useDefaults: true,
    logging: true,
});