/*
  Example only — shows the pattern, not a drop-in replacement.
  Find your existing sidebar nav item component (likely something like
  components/sidebar/nav-item.tsx) and apply these same three classes
  to its existing JSX. Do not change the href, onClick, or any routing
  logic — only the className values and the wrapping <span> for the icon.
*/

import type { LucideIcon } from "lucide-react";

interface AuroraNavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}

export function AuroraSidebarNavItem({
  href,
  label,
  icon: Icon,
  active,
}: AuroraNavItemProps) {
  return (
    <a href={href} className={`aurora-nav-item ${active ? "active" : ""}`}>
      <span className="aurora-nav-icon">
        <Icon size={18} />
      </span>
      <span>{label}</span>
    </a>
  );
}
