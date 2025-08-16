import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/assets/primary-logo.jpg"
            alt="Charm Lace Logo"
            width={200}
            height={200}
            className="mx-auto"
            priority
          />

          <p className="text-2xl mb-8 text-gray-600">
            Something beautiful is coming soon
          </p>
        </div>
        <div className="animate-pulse">
          <div className="h-2 w-48 bg-primary mx-auto rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
