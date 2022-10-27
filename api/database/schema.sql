DROP SCHEMA "staytuned" CASCADE;

CREATE SCHEMA "staytuned";

CREATE TABLE "staytuned"."products"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    price INT
)
