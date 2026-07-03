/*
  Example only. Wrap your existing stat values (project count, active
  tasks, earnings, etc.) with this presentation component instead of
  whatever <Card> markup currently renders them. The number and label
  you pass in still come from your existing data fetching — nothing
  about where `value` comes from should change.
*/

interface AuroraMetricCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export function AuroraMetricCard({ label, value, icon }: AuroraMetricCardProps) {
  return (
    <div className="aurora-card-glow">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="aurora-stat-label">{label}</span>
        {icon}
      </div>
      <div className="aurora-stat-value" style={{ marginTop: 8 }}>
        {value}
      </div>
    </div>
  );
}

/*
  Usage in your existing dashboard grid, keeping the same data source:

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
    <AuroraMetricCard label="Active projects" value={projects.length} icon={<FolderKanban size={18} />} />
    <AuroraMetricCard label="Tasks in progress" value={tasksInProgress} icon={<ListChecks size={18} />} />
    <AuroraMetricCard label="Completed today" value={completedToday} icon={<CheckCircle2 size={18} />} />
  </div>
*/
