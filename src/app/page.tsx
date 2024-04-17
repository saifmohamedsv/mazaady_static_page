import { Container } from "@/components/layout";
import Image from "next/image";
import { QRCode } from "./components/qr-code";
import { UserInfo } from "./components/user-info";
import { Products } from "./components/products";

export default function Home() {
  return (
    <main className="min-h-body-height py-12">
      <Container className="h-full md:space-x-8 grid grid-cols-12">
        <div className="space-y-6 col-span-12 md:col-span-4">
          <UserInfo />
          <QRCode />
        </div>
        <div className="mt-4 md:mt-0 col-span-12 md:col-span-8">
          <Products />
        </div>
      </Container>
    </main>
  );
}
