DROP SCHEMA "staytuned" CASCADE;

CREATE SCHEMA "staytuned";

CREATE TABLE "staytuned"."products"(
    "product_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "price" INT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),
    CONSTRAINT "products_pk" PRIMARY KEY ("product_id")
);

CREATE TABLE "staytuned"."subscriptions"(
    "subscription_id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "product_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),
    UNIQUE ("email", "product_id"),
    CONSTRAINT "subscriptions_pk" PRIMARY KEY ("subscription_id")
);

ALTER TABLE "staytuned"."subscriptions" ADD CONSTRAINT "subscriptions_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "staytuned"."products"("product_id");