'use client';

import { data } from '@/data/work-locations';
import React from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          separator=": "
          formatter={(value: string, name: string) => {
            if (name === 'wfh') {
              return [value, 'Work From Home'];
            } else if (name === 'office') {
              return [value, 'Work From Office'];
            }
          }}
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <Legend
          iconType="circle"
          formatter={(value: string) => {
            if (value === 'wfh') {
              return <div className="text-sm">Work From Home</div>;
            } else if (value === 'office') {
              return <div className="text-sm">Work From Office</div>;
            }
          }}
        />

        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
