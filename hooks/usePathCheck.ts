import { headers } from "next/headers";

type PathCheck = {
  pathname: string;
  isMatch: boolean;
};

export function usePathCheck(specificRoute: string): PathCheck {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  return {
    pathname: pathname,
    isMatch: pathname === specificRoute,
  };
}

export default usePathCheck;
