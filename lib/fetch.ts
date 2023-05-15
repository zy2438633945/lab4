import DigestFetch from "with-digest-fetch";

const client = new DigestFetch(
  process.env.PUBLIC_KEY!,
  process.env.PRIVATE_KEY!
);

export const fetcher = (key: string, body?: Record<string, any>) => {
  const url = `${process.env.HOST}/${key}`;

  return client
    .fetch(url, {
      body: body ? JSON.stringify(body) : body,
    })
    .then((res) => res.json());
};
