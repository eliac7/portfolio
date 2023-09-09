import { headers } from "next/headers";

export function usePathCheck(specificRoute: string): boolean {
  console.log("usePathCheck: specificRoute", specificRoute);

  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  return pathname === specificRoute;
}

export default usePathCheck;
