import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.XATA_DATABASE_URL) {
    throw new Error("Please set your XATA_DATABASE_URL");
}

const connectionString = process.env.XATA_DATABASE_URL as string;
const dbUrl = new URL(connectionString);

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/app/db/schema.ts",
    out: "./src/app/db/migrations",
    dbCredentials: {
        host: dbUrl.hostname,
        user: dbUrl.username,
        password: dbUrl.password,
        database: dbUrl.pathname.split('/')[1].split(':')[0],
        ssl: true
    }
}); 