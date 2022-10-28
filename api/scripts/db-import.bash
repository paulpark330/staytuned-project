#!/bin/bash -e

test -f .env && source .env
psql postgres://localhost:5432/staytuned -f database/schema.sql -f database/data.sql

# psql --host=ec2-44-209-57-4.compute-1.amazonaws.com --port=5432 --username=kodcsamvuioezm --password --dbname=d6k869l2m6p6rs -f database/schema.sql -f database/data.sql