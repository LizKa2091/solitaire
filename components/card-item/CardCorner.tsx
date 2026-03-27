interface CardCornerProps {
   rank: string | number;
   suit: string;
   className?: string;
}

const CardCorner = ({ rank, suit, className = '' }: CardCornerProps) => (
   <div className={`flex gap-[5px] ${className}`}>
      <span className="font-bold text-lg">{rank}</span>
      <span className="text-lg">{suit}</span>
   </div>
);

export default CardCorner;