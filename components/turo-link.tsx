import { ExternalLink } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type TuroLinkProps = ComponentProps<typeof Button> & {
  href: string;
  showIcon?: boolean;
};

export function TuroLink({
  href,
  className,
  children,
  showIcon = true,
  ...props
}: TuroLinkProps) {
  return (
    <Button asChild className={className} {...props}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        {showIcon ? <ExternalLink className="size-3.5" /> : null}
      </a>
    </Button>
  );
}
