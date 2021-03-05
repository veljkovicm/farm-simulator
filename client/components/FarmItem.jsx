import React from 'react';
import Link from 'next/link';

const FarmItem = ({ farm }) => {

  return (
      <Link href="/farm/[id]" as={`/farm/${farm.id}`}>
        <a>{farm.name}</a>
      </Link>

  )
}

export default FarmItem;
