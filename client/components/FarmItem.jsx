import React from 'react';
import Link from 'next/link';

const FarmItem = ({ farm }) => {

  return (
      <Link href="/farm/[id]" as={`/farm/${farm.id}`}>
        <a>
          <h4>Name: {farm.name} &rarr;</h4>
          <span>ID: {farm.id}</span>
        </a>
      </Link>

  )
}

export default FarmItem;
