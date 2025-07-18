"use client"
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { MeetingIdViewHeader } from "../components/meeting-id-view-header";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { error } from "console";
import { useConfirm } from "@/hooks/use-confirm";
import { UpdateMeetingDialog } from "../components/update-meeting-dialog";
import { useState } from "react";

interface Props {
  meetingId: string;
}

export const MeetingIdView = ({ meetingId }: Props) => {
  const trpc = useTRPC();
  const router = useRouter(); // 'router' is assigned a value but never used
const queryClient = useQueryClient();
const [UpdateMeetingDialogOpen,setUpdateMeetingDialogOpen]= useState(false)
const { data } = useSuspenseQuery(
  trpc.meetings.getOne.queryOptions({ id: meetingId }),
);
const [RemoveConfirmation,confirmRemove]= useConfirm(
        "Are you sure?",
        `The following action will remove this meetings`,
    )

const removeMeeting = useMutation( // 'removeMeeting' is assigned a value but never used
  trpc.meetings.remove.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
      // TODO: Invalidate free tier usage
      router.push("/meetings")
    },
   
  })
);
const handleRemoveMeeting= async()=>{
        const ok= await confirmRemove();

        if(!ok)return;

        await removeMeeting.mutateAsync({id:meetingId})
    }

  return (
    <>
    <RemoveConfirmation />
    <UpdateMeetingDialog
    open={UpdateMeetingDialogOpen}
    onOpenChange={setUpdateMeetingDialogOpen}
    initialValues={data}
    />
    <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
     <MeetingIdViewHeader
             meetingId={meetingId}
             meetingName={data.name}
             onEdit={() =>setUpdateMeetingDialogOpen(true)}
             onRemove={handleRemoveMeeting}
             /> 
      {JSON.stringify(data, null, 2)}
    </div>
    </>
  );
};


export const MeetingIDViewLoading=()=>{
    return (
        <LoadingState
            title="Loading Meeting"
            description="This may takes few seconds"
            />
    )
}

export const MeetingIDViewError=()=>{
    return (
        <ErrorState
      title="Error Loading Meeting"
      description="Something went wrong"
    />
    )
}