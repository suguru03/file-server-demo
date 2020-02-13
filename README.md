## File server

### Run server

```sh
// run deno file_server
deno run -A https://deno.land/std/http/file_server.ts .
deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts .

// if you already have file_server
file_server .

// custom file server
deno run -A file_server.ts

// run express on Node
node server.js
```

### Run test

```sh
deno --allow-net test.ts
```
