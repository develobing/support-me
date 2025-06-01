import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { data } from '@/data/team-leaders';
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TeamDistributionChart from './team-distribution-chart';
import SupportTicketsResolved from './support-tickets-resolved';

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>

            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2">
            {data.map((leader) => (
              <TooltipProvider key={`${leader.firstName}-${leader.lastName}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!leader.avatar && (
                        <Image
                          src={leader.avatar}
                          alt={`${leader.firstName} ${leader.lastName}`}
                        />
                      )}

                      <AvatarFallback>
                        {leader.firstName[0]}
                        {leader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>

                  <TooltipContent>
                    {leader.firstName} {leader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-base flex justify-between">
              <span>Team Distribution</span>
              <PieChartIcon className="" />
            </CardTitle>
          </CardHeader>

          <CardContent>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span className="ml-2">Support tickets resolved</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}
