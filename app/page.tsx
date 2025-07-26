import { redirect } from "next/navigation";

export default function InputForm() {
  redirect("/login");
  return (
    <div>
      {/* <footer className="flex items-center gap-x-2">
        <Link href="/user">User</Link>
        <Link href="/admin">Admin</Link>
      </footer> */}
    </div>
  );
}
