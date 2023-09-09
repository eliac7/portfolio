declare global {
  interface Window {
    gtag: any;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string | number;
}): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
