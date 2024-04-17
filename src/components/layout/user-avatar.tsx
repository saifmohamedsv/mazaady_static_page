import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui";

interface UserAvatarProps {
  image?: string;
  username?: string;
  email?: string;
}

export function UserAvatar({ image, username }: UserAvatarProps) {
  return (
    <div className={clsx("flex items-center gap-2")}>
      <Avatar className={clsx("w-8 h-8", "md:w-10 md:h-10")}>
        <AvatarImage src={image || "https://github.com/shadcn.png"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
