import clsx from "clsx";
import { EyeIcon, FileIcon, ShareIcon, Terminal } from "lucide-react";

interface QRCodeProps {
  className?: string;
}

export function QRCode({ className }: QRCodeProps) {
  return (
    <div
      className={clsx(
        "flex flex-col w-full rounded-lg bg-white p-4",
        "md:p-8",
        className
      )}
    >
      <div className="flex justify-between">
        <h1 className={clsx("text-lg font-semibold", "md:text-2xl")}>
          QR Code
        </h1>
        <div className="flex items-center gap-2">
          <EyeIcon />
          <ShareIcon />
          <FileIcon />
        </div>
      </div>

      <div className="rounded-xl my-4 bg-secondary-foreground flex gap-2 items-center p-4">
        <FileIcon className="text-secondary" />
        <p className="text-xs">
          Download the QR code or share it with your friends.
        </p>
      </div>

      <div className="p-4 primary-gradient-bg rounded-xl">
        <div className={clsx("bg-white w-full h-80 rounded-xl mb-4", "")}></div>
      </div>
    </div>
  );
}
