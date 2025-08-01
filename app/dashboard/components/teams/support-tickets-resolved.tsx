'use client';

import { data } from '@/data/support-tickets';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function SupportTicketsResolved() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />

        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="alpha" stroke="#3b82f6" />
        <Line type="monotone" dataKey="canary" stroke="#f97316" />

        <Legend
          formatter={(value: string) => (
            <span className="capitalize">{value}</span>
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
