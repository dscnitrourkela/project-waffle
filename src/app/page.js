'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/playground'}>
        <h3>Go to Playground</h3>
      </Link>
    </div>
  );
}
