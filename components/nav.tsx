import { getUser } from "@/actions/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Logout from "./logout-dropdown";

export default async function Nav({ className }: React.ComponentProps<"div">) {
  const { username } = await getUser();
  return (
    <div className={className}>
      <section className="flex justify-between items-center w-full max-w-[1080px] mx-auto py-4 max-md:px-4">
        <p>LOGO</p>
        <div className="flex items-center gap-x-3">
          <Avatar>
            <AvatarFallback>
              {username.split("")[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger className="underline">
              {username}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Logout />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </div>
  );
}
