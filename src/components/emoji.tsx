import React from "react";

const Emoji: React.FC<EmojiProps> = ({
  symbol,
  className,
}: {
  symbol: number;
  className: string;
}) => (
  <span role="img" className={` ${className}`}>
    {String.fromCodePoint(symbol)}
  </span>
);

export default Emoji;
