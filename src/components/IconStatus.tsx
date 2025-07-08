import { useIconValidation } from "@/hooks/use-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

interface IconStatusProps {
  showInProduction?: boolean;
}

export function IconStatus({ showInProduction = false }: IconStatusProps) {
  const {
    allIconsValid,
    missingIcons,
    validationStatus,
    totalIcons,
    validIcons,
    loading,
    error,
  } = useIconValidation();

  // Only show in development unless explicitly enabled for production
  if (!showInProduction && process.env.NODE_ENV === 'production') {
    return null;
  }

  if (loading) {
    return (
      <Alert className="border-blue-200 bg-blue-50">
        <Loader2 className="h-4 w-4 animate-spin" />
        <AlertTitle>Checking Icons...</AlertTitle>
        <AlertDescription>
          Validating favicon and icon files
        </AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Icon Validation Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className={allIconsValid ? "border-green-200 bg-green-50" : "border-orange-200 bg-orange-50"}>
      {allIconsValid ? (
        <CheckCircle2 className="h-4 w-4 text-green-600" />
      ) : (
        <AlertTriangle className="h-4 w-4 text-orange-600" />
      )}
      <AlertTitle className="flex items-center gap-2">
        Icon Status
        <Badge variant={allIconsValid ? "default" : "secondary"}>
          {validIcons}/{totalIcons} valid
        </Badge>
      </AlertTitle>
      <AlertDescription>
        {allIconsValid ? (
          "All favicons and icons are properly loaded and accessible."
        ) : (
          <div className="space-y-2">
            <p>Some icon files are missing or inaccessible:</p>
            <ul className="list-disc list-inside space-y-1">
              {missingIcons.map((icon) => (
                <li key={icon.path} className="text-sm font-mono">
                  {icon.path}
                </li>
              ))}
            </ul>
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
}

/**
 * Floating icon status indicator for development
 */
export function FloatingIconStatus() {
  const { allIconsValid, validIcons, totalIcons, loading } = useIconValidation();

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Badge
        variant={loading ? "secondary" : allIconsValid ? "default" : "destructive"}
        className="shadow-lg"
      >
        {loading ? (
          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
        ) : allIconsValid ? (
          <CheckCircle2 className="h-3 w-3 mr-1" />
        ) : (
          <AlertTriangle className="h-3 w-3 mr-1" />
        )}
        Icons: {validIcons}/{totalIcons}
      </Badge>
    </div>
  );
} 