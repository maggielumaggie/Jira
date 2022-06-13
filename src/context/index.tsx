import { AuthProvider } from "./auth-context";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>c
    </QueryClientProvider>
  );
};
