export default function Loading() {
  "use client";
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="absolute top-0 left-0 w-full h-1 ">
      <div className="w-[80%] h-1 bg-red-500 "></div>
    </div>
  );
}
