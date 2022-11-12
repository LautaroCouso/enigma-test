export type Content = { url: string; alt: string; id: number; href: string };
export type Contents = Array<Content>;
export type CardContents = Array<CardInfo>;
export type CardInfo = {
  fileType: string;
  file: string;
  cardTitle: string;
  author: string;
  currency: string;
  price: string;
  currencyType: string;
  id: number;
  authorAvatar: string;
  link: string;
};
export type topArtistCardContents = Array<topArtistCardInfo>;
export type topArtistCardInfo = {
  media: string;
  avatar: string;
  artist: string;
  description: string;
  followers: number;
  link: string;
  id: number;
};
