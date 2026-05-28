import Image from "next/image";

export function Avatar() {
  return (
    <div className="relative mx-auto w-56 md:w-64">
      <Image
        src="/avatar.svg"
        alt="Illustrated avatar of Rahul with glasses"
        width={320}
        height={320}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
