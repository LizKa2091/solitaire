import { ICard } from "@/types/cardTypes"
import CardCorner from "./CardCorner";

interface ICardProps {
   card: ICard;
}

export const CardItem = ({ card }: ICardProps) => {
   const { rank, suit } = card;

   const textColor = suit === '♥' || suit === '♦' ? 'text-red-600' : 'text-black';

   return (
      <div className={`relative flex flex-col justify-between bg-white rounded-md
         ${textColor} w-32 h-48 p-2 shadow-md transition-transform duration-300 
         hover:scale-105 group`}
      >
         <CardCorner rank={rank} suit={suit} />
         <div className="flex justify-center">
            <span className="text-4xl">{suit}</span>
         </div>
         <CardCorner rank={rank} suit={suit} className="rotate-180"/>
      </div>
   )
}
export default CardItem;