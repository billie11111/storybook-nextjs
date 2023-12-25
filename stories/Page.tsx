import Image from 'next/image';
import React from 'react';

export const Page: React.FC = () => {
  return (
    <article>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </article>
  );
};
