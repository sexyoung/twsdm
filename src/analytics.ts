import ReactGA from "react-ga4";

export const initGA = (trackingId: string) => {
  ReactGA.initialize(trackingId);
};

export const trackPageview = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
