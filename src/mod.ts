import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { Hono } from "../deps.ts";

const app = new Hono();

// TODO: これらの変数をリファクタリングして可読性を向上させる
const github = "https://github.com/codrawers";
const twitter = "https://twitter.com/codrawers";
const youtube = "https://youtube.com/@codrawers";
const qiita = "https://qiita.com/organizations/codrawers";

app.get("/github", (c) => c.redirect(github));
app.get("/twitter", (c) => c.redirect(twitter));
app.get("/youtube", (c) => c.redirect(youtube));
app.get("/qiita", (c) => c.redirect(qiita));

serve(app.fetch);
