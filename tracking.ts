declare global {
  interface Window {
    dataLayer: {
      readonly event: string;
      readonly [field: string]: any;
    }[];
  }
}

export function track(event: string, payload?: Record<string, any>): void {
  if (
    typeof window !== 'undefined' &&
    typeof window.dataLayer !== 'undefined'
  ) {
    console.info(`event -> ${JSON.stringify({ event, ...payload })}`);
    window.dataLayer.push({
      event,
      ...payload,
    });
  }
}
