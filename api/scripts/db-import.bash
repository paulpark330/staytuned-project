#!/bin/bash -e

test -f .env && source .env
psql postgres://localhost:5432/staytuned -f database/schema.sql -f database/data.sql