import Link from "next/link"; // 'Link' is defined but never used.
import { VideoIcon } from "lucide-react"; // 'VideoIcon' is defined but never used.
import { Button } from "@/components/ui/button"; // 'Button' is defined but never used.
import { EmptyState } from "@/components/empty-state";
interface Props{
    meetingId:string;
    
}
export const ActiveState = ({
    meetingId,
    
}:Props) => {
  return (
    <>
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/upcoming.svg"
        title="Meeting is Active"
        description="Meeting will end once all participants have left"
      />
    </div>

        <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full">
    
    <Button asChild className="w-full lg:w-auto">
        <Link href={`/call/${meetingId}`}>
        <VideoIcon />
        Join meeting
        </Link>
    </Button>
    </div>
</>
  );
};
