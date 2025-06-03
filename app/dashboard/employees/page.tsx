import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { data } from '@/data/employees';
import React from 'react';
import { setTimeout } from 'timers/promises';
import { columns } from './columns';

async function EmployeesPage() {
  await setTimeout(5000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>

      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}

export default EmployeesPage;
