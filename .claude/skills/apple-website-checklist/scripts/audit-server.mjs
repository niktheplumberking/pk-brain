#!/usr/bin/env node
// Serves audit.js with CORS so any page under test can load it:
//   node audit-server.mjs [port=4319]
// then, in the page (browser JS tool):
//   eval(await (await fetch('http://localhost:4319/audit.js', {cache:'no-store'})).text())
// If the page's CSP blocks the fetch, paste the contents of audit.js into the JS tool instead.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const port = +(process.argv[2] || 4319);
http.createServer((req, res) => {
  const h = { 'access-control-allow-origin': '*', 'access-control-allow-private-network': 'true', 'cache-control': 'no-store' };
  if (req.method === 'OPTIONS') { res.writeHead(204, { ...h, 'access-control-allow-headers': '*' }); return res.end(); }
  if (req.url.split('?')[0] !== '/audit.js') { res.writeHead(404, h); return res.end('only /audit.js'); }
  res.writeHead(200, { ...h, 'content-type': 'text/javascript; charset=utf-8' });
  res.end(fs.readFileSync(path.join(here, 'audit.js')));
}).listen(port, () => console.log(`audit.js served at http://localhost:${port}/audit.js`));
