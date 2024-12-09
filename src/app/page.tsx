import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tag, ShoppingCart, PowerCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-16 mb-16 mt-8 flex justify-between items-center">
        <Image
          src="/1.png"
          alt="Dekorasi"
          className="rounded-full"
          width={64}
          height={64}
        />
        <div className="flex items-center gap-4">
          <Input
            className="rounded-xl w-96"
            placeholder="Silahkan cari menu disini..."
          />
          <Separator orientation="vertical" className="w-[2px] h-4" />
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <p className="text-sm font-semibold">Keranjang</p>
          </div>
          <Separator orientation="vertical" className="w-[2px] h-4" />
          <div className="flex items-center gap-2 text-destructive">
            <PowerCircle className="w-4 h-4" />
            <p className="text-sm font-semibold">Log out</p>
          </div>
        </div>
      </div>
      <Card className="m-16 relative h-96 overflow-hidden">
        <Image
          src="/hero.png"
          alt="Dekorasi"
          className="object-cover"
          fill
          priority
          quality={100}
        />
      </Card>
      <div className="mx-16 mb-16 mt-8 grid grid-cols-5 gap-4">
        <Card className="overflow-hidden">
          <div className="relative aspect-square flex justify-center items-center">
            <Image src="/2.png" alt="Dekorasi" fill priority quality={100} />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Lemonade</p>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold">Rp 15.000</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Tambah keranjang
            </Button>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="relative aspect-square flex justify-center items-center">
            <Image src="/3.png" alt="Dekorasi" fill priority quality={100} />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Jus Ang Ang</p>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold">Rp 20.000</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Tambah keranjang
            </Button>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="relative aspect-square flex justify-center items-center">
            <Image src="/4.png" alt="Dekorasi" fill priority quality={100} />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Es Teh</p>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold">Rp 10.000</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Tambah keranjang
            </Button>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="relative aspect-square flex justify-center items-center">
            <Image src="/5.png" alt="Dekorasi" fill priority quality={100} />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Ayam Menyala</p>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold">Rp 35.000</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Tambah keranjang
            </Button>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="relative aspect-square flex justify-center items-center">
            <Image src="/6.png" alt="Dekorasi" fill priority quality={100} />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Ayam Tergoreng</p>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold">Rp 25.000</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Tambah keranjang
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
