import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-700">
        This is a protected route
        <UserButton />
      </p>
    </div>
  );
}
