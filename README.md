# papersky

Codrawers 関連の短縮リンク集

## 使い方

```
https://codrawers.dev/**
```

- `/github` - Codrawers の GitHub Organization へのリダイレクトリンク
- `/twitter` - Codrawers の Twitter アカウントへのリダイレクトリンク
- `/youtube` - Codrawers の YouTube アカウントへのリダイレクトリンク
- `/qiita` - Codrawers の Qiita アカウントへのリダイレクトリンク

## 開発への参加

### エンドポイントの追加

エンドポイントを追加する場合は `src/mod.ts` を編集します。

変数 `app` にある `get()` メソッドで定義します。

```ts
app.get("/<エンドポイント>", (c) => <その立ち振舞>);
```

- `c.redirect("<URL>")` - 指定した URL にリダイレクトさせます。
  - Discord 招待リンクなどの可変する値は `getEnv()` を使い、環境変数から引っ張ってください。(わざわざコードの変更は面倒なため)
  - 環境変数は Deno Deploy から定義できます。

## 環境変数

環境変数は Deno Deploy で定義します。

| Key | Description |
| ---- | ---- |
| `DISCORD_GUILD_INVITE_URL` | Codrawers のギルドへの招待リンク |

----

**名前の由来**: [@lis2a](https://github.com/lis2a) が好きなバンド [Survive Said the Prophet](https://survivesaidtheprophet.com/) の楽曲 **Papersky** から取っています。

[Survive Said The Prophet - Papersky - (YouTube)](https://www.youtube.com/watch?v=okOMkF_Ayu0)
