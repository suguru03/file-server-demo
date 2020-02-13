import {
  serve,
  ServerRequest,
  Response,
} from 'https://deno.land/std@v0.32.0/http/server.ts';
import { extname, posix } from 'https://deno.land/std@v0.32.0/path/mod.ts';

const { stat, open, cwd } = Deno;

async function serveFile(req: ServerRequest, filePath: string) {
  const [file, fileInfo] = await Promise.all([open(filePath), stat(filePath)]);
  const headers = new Headers();
  headers.set('content-length', fileInfo.len.toString());
  headers.set('content-type', 'text/plain; charset=utf-8');

  const res = {
    status: 200,
    body: file,
    headers,
  };
  return res;
}

window.onload = async function main() {
  const addr = '0.0.0.0:4500';
  const server = serve(addr);
  console.log(`HTTP server listening on http://${addr}/`);
  for await (const req of server) {
    const res = await serveFile(req, 'public/index.html');
    await req.respond(res);
    res.body.close();
  }
};
