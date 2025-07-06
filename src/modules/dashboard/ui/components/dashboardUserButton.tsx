import { GeneratedAvatar } from "@/components/generate-avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, CreditCardIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const DashboardUserButton = () => {
  const router=useRouter();
  const { data, isPending } = authClient.useSession();
  if (isPending || !data?.user) {
    return null;
  }

  const onLogout= async()=>{
    await authClient.signOut({
      fetchOptions:{
        onSuccess:()=>{
          router.push("/auth/sign-in")
        }
      }
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
      className="w-full flex items-center gap-3 rounded-lg border border-gray-400 bg-white px-4 py-3
                hover:bg-gray-50 transition-colors duration-150 shadow-lg"
    >
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image}></AvatarImage>
          </Avatar>
        ) : (
          <GeneratedAvatar
            seed={data.user.name}
            variant="initials"
            className="size-9 mr-3"
          />
        )}
        <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm font-semibold truncate w-full text-black dark:text-white">
                {data.user.name}
            </p>
            <p className="text-xs truncate w-full text-gray-800 dark:text-gray-300">
                {data.user.email}
            </p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0 text-black dark:text-white"/>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="right" className="w-72 gap-1 p-4 rounded-md shadow-md bg-white text-black dark:bg-gray-900 dark:text-white">
        <DropdownMenuLabel>
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-black dark:text-white truncate">
        {data.user.name}
      </span>
      <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
        {data.user.email}
      </span>
    </div>
  </DropdownMenuLabel>
  <DropdownMenuSeparator/>
  <DropdownMenuItem
  className="cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800">
    Billing
    <CreditCardIcon  className="size-4"/>
  </DropdownMenuItem>

  <DropdownMenuItem
  onClick={onLogout}
  className="cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800">
    Logout
    <LogOutIcon className="size-4"/>
  </DropdownMenuItem>
</DropdownMenuContent>

    </DropdownMenu>
  );
};