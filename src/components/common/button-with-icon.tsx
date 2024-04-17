import { Button, ButtonProps } from "@/components/ui";
import clsx from "clsx";

interface ButtonWithIcon extends ButtonProps {
  icon: any;
  title: string;
}

export function ButtonWithIcon({
  className,
  icon: Icon,
  title,
}: ButtonWithIcon) {
  return (
    <Button size={"sm"} className={clsx(className)}>
      <Icon className="mr-2 w-4 h-4" /> {title}
    </Button>
  );
}
