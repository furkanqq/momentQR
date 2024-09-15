/**
 *
 * @param page
 * @param ms
 * @returns
 */
export const routerToPage = (page: string, ms: number): NodeJS.Timeout => {
  return setTimeout(() => (window.location.href = page), ms);
};
