import { ThemeSwitcher } from "@/components/kibo-ui/theme-switcher";
import { useTheme } from "@/components/theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle({
  className,
  mobile,
}: {
  className?: string;
  mobile?: boolean;
}) {
  const { theme, setTheme } = useTheme() as {
    theme?: "light" | "dark" | "system";
    setTheme: (t: "light" | "dark" | "system") => void;
  };
  if (mobile) {
    return (<div>


      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant="ghost"
        size="sm"
        className={"w-full"}
      >
       {theme === "dark" ? "Light Mode" : "Dark Mode"} {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
    );
  }
  return (
    <ThemeSwitcher
      value={theme ?? "system"}
      onChange={setTheme}
      className={className}
    />
  );
}
