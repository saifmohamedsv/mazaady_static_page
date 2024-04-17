import { ButtonWithIcon } from "@/components/common";
import clsx from "clsx";
import { HeartIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";

interface ProductsProps {}

const Tab = ({ title }: { title: string }) => {
  return (
    <div className="cursor-pointer md:min-w-[120px] px-4 text-center py-2 rounded-full border-[1px] text-[#828282] border-[#E0E0E0] text-sm">
      {title}
    </div>
  );
};

const ProductCard = () => {
  const ProductTimeCard = () => (
    <div className="min-w-[120px] flex items-center justify-center gap-2 rounded-full p-2  bg-secondary-foreground text-secondary">
      <p className="font-semibold text-lg">2</p>
      <p className="text-sm">Days</p>
    </div>
  );

  return (
    <div className="w-full flex items-start justify-between">
      <div className="flex items-start gap-4">
        {/* Image */}
        <Image
          src={"https://github.com/shadcn.png"}
          width={1200}
          height={1200}
          className={clsx(
            "w-[100px] h-[100px] rounded-xl",
            "md:w-[140px] md:h-[120px]"
          )}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className={clsx("text-xs text-[#333333]", "md:text-lg")}>
            Six-piece clothing set (blouse - pants - hat and ...
          </h1>
          <p className={clsx("text-xs text-[#828282]", "md:text-lg")}>
            Starting price{" "}
            <strong className="text-[var(--foreground)] text-xl">
              1000 EGP
            </strong>
          </p>
          <p
            className={clsx(
              "flex items-center text-xs text-[#828282] flex-wrap gap-4",
              "md:text-lg"
            )}
          >
            Lot Starts In
            <ProductTimeCard />
            <ProductTimeCard />
            <ProductTimeCard />
          </p>
        </div>
      </div>

      <HeartIcon className="cursor-pointer hidden md:block" />
    </div>
  );
};

export function Products({}: ProductsProps) {
  return (
    <div className="md:p-8 p-4 w-full rounded-xl bg-white flex flex-col">
      {/* Head */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Tab title="Products" />
          <Tab title="Articles" />
          <Tab title="Reviews" />
        </div>
        <ButtonWithIcon
          className="hidden md:flex"
          icon={PlusCircleIcon}
          title="Add Review"
        />
      </div>

      {/* List */}
      <div className="mt-6">
        <h1 className="font-bold text-2xl md:text-4xl mb-6">Products</h1>

        {/* Items */}
        <div className="flex flex-col gap-12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
