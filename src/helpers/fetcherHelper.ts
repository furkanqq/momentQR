export const nextFetcher = (url: string) =>
  fetch(url, {
    next: {
      revalidate: 6000
    }
  }).then((res) => res.json());
