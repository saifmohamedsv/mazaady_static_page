import { Button, ButtonProps } from "@/components/ui";

interface ButtonWithIcon extends ButtonProps {
  icon: any;
  title: string;
}

export function ButtonWithIcon({ icon: Icon, title }: ButtonWithIcon) {
  return (
    <Button size={"sm"}>
      <Icon className="mr-2 w-4 h-4" /> {title}
    </Button>
  );
}
