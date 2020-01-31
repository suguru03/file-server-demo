## File server

### Run server

```sh
// run deno file_server
deno run -A https://deno.land/std/http/file_server.ts .
deno run --allow-net https://deno.land/std/http/file_server.ts .
file_server .

// run express on Node
node server.js
```

### Run test

```sh
deno --allow-net test.ts
```
