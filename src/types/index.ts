// types.ts

export interface CardData {
  img:string;
  title: string;
  scene: string;
}

export interface FlippableCardProps {
  data: CardData;
}

export interface CardProps {
  onClick: () => void;
  data: CardData;
}
