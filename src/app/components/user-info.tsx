import { Button } from "@/components/ui";
import clsx from "clsx";
import { StarIcon, UserIcon, Users2Icon } from "lucide-react";
import Image from "next/image";

interface UserInfoProps {}

interface UserInfoProps {
  className?: string;
}

const StatsCard = ({
  icon: Icon,
  stat,
  label,
  className,
}: {
  icon: any;
  stat: string;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-secondary-foreground rounded-2xl p-2 flex items-center gap-2",
        className
      )}
    >
      <Icon className="text-secondary w-6 h-6" />
      <div className="flex flex-col items-start">
        <p className="text-sm">{stat}</p>
        <p className="text-secondary text-xs">{label}</p>
      </div>
    </div>
  );
};
export function UserInfo({ className }: UserInfoProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-start w-full rounded-lg bg-white p-4",
        "md:p-8",
        className
      )}
    >
      <Image
        src={"https://github.com/shadcn.png"}
        width={100}
        height={100}
        className={clsx(
          "w-[80px] h-[80px] rounded-xl mb-4",
          "md:w-[100px] md:h-[100px]"
        )}
        alt="User"
      />

      <h1 className="text-lg md:text-2xl font-semibold mb-3">Hala Ahmed</h1>

      <p className="text-sm text-grey">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>

      <div className="w-full mt-6 grid grid-cols-3 space-x-2">
        <StatsCard
          className="col-span-1"
          icon={UserIcon}
          label="Following"
          stat="5"
        />
        <StatsCard
          className="col-span-1"
          icon={Users2Icon}
          label="Followers"
          stat="20"
        />
        <StatsCard
          className="col-span-1"
          icon={StarIcon}
          label="Rate"
          stat="4.2"
        />
      </div>

      <Button className="w-full mt-6 rounded-xl">Follow</Button>
    </div>
  );
}
