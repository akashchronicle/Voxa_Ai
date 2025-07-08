"use client"
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { ResponsiveDialog } from "@/components/responsive-dailog";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
 export const AgentsView =()=>{
    const trpc = useTRPC();
    const{ data }=useSuspenseQuery(trpc.agents.getMany.queryOptions())
    //  if(isLoading){
    //     return (
            // <LoadingState
            // title="Loading Agents"
            // description="This may takes few seconds"
            // />
    //     )
    //  }

    //  if(isError){
    //     return (
    //         <ErrorState 
    //         title="Error Loading Agents"
    //         description="Please try again later"/>
    //     )
    //  }

     return (
        <div>
          

            
            {JSON.stringify(data,null,2)}
        </div>
     )


}

export const AgentsViewLoading=()=>{
    return (
        <LoadingState
            title="Loading Agents"
            description="This may takes few seconds"
            />
    )
}

export const AgentsViewError=()=>{
    return (
        <ErrorState
      title="Error Loading Agents"
      description="Something went wrong"
    />
    )
}

