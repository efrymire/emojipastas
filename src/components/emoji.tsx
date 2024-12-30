import React from "react";

const Emoji = ({
  symbol,
  className,
}: {
  symbol: string;
  className?: string;
}) => (
  <span role="img" className={` ${className}`}>
    {/* @ts-ignore */}
    {String.fromCodePoint(symbol)}
  </span>
);

export default Emoji;
