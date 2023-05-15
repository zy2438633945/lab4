import useSWR from "swr";

export const config = {
  ssr: false,
};

export default function Home() {
  const { data } = useSWR(`/api/gateway/total_order`, fetch);
  console.log("data: ", data);
  return <h1>hello world</h1>;
}
