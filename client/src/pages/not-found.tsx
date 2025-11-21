import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-4">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-muted">
              <AlertCircle className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          
          <p className="text-lg text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Button size="lg" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
