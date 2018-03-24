FROM mongo

COPY data.json /data.json
CMD mongoimport --host mongo --db snippets --collection snippets --type json --file /data.json --jsonArray
