import SkeletonCards from "@/components/skeleton-cards";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SkeletonCards count={6} />
    </div>
  );
}
