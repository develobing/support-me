'use client';

import { data } from '@/data/team-distribution';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItem, index) => (
            <Cell key={index} fill={dataItem.color}></Cell>
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
