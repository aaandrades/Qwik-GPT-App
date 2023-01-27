import type { RequestHandler } from "@builder.io/qwik-city";

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

export const onGet: RequestHandler<ProductData | any> = async ({ params }) => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          description: `Example mocking a rest API ${params}`,
        }),
      2000
    )
  );
};
