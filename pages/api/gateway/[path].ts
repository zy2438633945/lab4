// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "~/lib/fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, ...rest } = req.query;

  const searchParams = new URLSearchParams();
  for (const key in rest) {
    searchParams.append(key, rest[key] as string);
  }
  const url =
    Object.keys(rest).length > 0
      ? `${path}?${searchParams.toString()}`
      : (path as string);

  const response = await fetcher(url);
  res.status(200).json(response);
}
