export function BlogSkeleton() {
  return (
    <div className="animate-pulse grid md:grid-cols-2 gap-6">
      {[1,2,3,4].map(i => (
        <div key={i} className="h-40 bg-gray-200 rounded-xl" />
      ))}
    </div>
  );
}