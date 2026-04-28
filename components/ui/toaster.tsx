import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1C1C1C",
          border: "1px solid #333333",
          color: "#FFFFFF",
        },
      }}
    />
  );
}
