/**
 * 環境変数を返す
 * @param key 環境変数の Key
 * @returns 環境変数の Value
 */
export function getEnv(key: string): string {
  const value = Deno.env.get(key);
  if (!value) {
    throw Error(`Key[${key}] not set.`);
  }
  return value;
}
