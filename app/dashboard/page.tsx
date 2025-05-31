import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import EmployeesStats from './components/employees/employees-stats';

export default function DashboardPage() {
  return (
    <div>
      <Tabs defaultValue="employees" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="employees">Employees Stats</TabsTrigger>
          <TabsTrigger value="teams">Teams Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="employees">
          <EmployeesStats />
        </TabsContent>

        <TabsContent value="teams">
          <h2 className="text-2xl font-bold">Teams Stats</h2>
        </TabsContent>
      </Tabs>
    </div>
  );
}
