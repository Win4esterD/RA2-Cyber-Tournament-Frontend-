'use client';
import { CreateTournamentForm } from '@/modules/tournaments/CreateTournamentForm/CreateTournamentForm';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';
import { IconBadge } from '@/modules/shared/ui/IconBadge/IconBadge';
import { LuTrophy } from 'react-icons/lu';

export function CreateTournamentPageUI() {
  return (
    <div className="p-6 lg:p-10 max-w-2xl mx-auto">
      <BackButton text="Back" />
      <div className="flex gap-3 mb-1">
        <IconBadge Icon={<LuTrophy className="w-6 h-6" strokeWidth={2} />} />
        <div>
          <h1 className="text-2xl font-bold">New Tournament</h1>
          <p className="text-sm text-slate-500">Configure the tournament settings</p>
        </div>
      </div>
      <CreateTournamentForm submitHandler={(data) => console.log(data)} />
    </div>
  );
}
