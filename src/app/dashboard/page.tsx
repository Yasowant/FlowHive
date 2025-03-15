'use client';

import withAuth from '@/hoc/withAuth';

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Hi, Good Morning</h1>
    </div>
  );
}

export default withAuth(Dashboard);
