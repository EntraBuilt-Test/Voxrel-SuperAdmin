/*
  Example only — shows the visual shell. Your actual login page keeps
  its existing form fields, validation, and submit handler exactly as
  they are today. Only wrap the existing <form> in this outer markup
  and swap the surrounding className values.
*/

export function AuroraLoginShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="aurora-shell aurora-mesh"
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          {/* Replace with your actual logo image */}
          <span className="aurora-brand-mark">Voxrel</span>
        </div>

        <div className="aurora-auth-card">
          {/* Your existing login form goes here, unchanged */}
          {children}
        </div>
      </div>
    </div>
  );
}

/*
  Usage in your existing login page, keeping the exact same form/logic:

  export default function LoginPage() {
    // ...all your existing useState, useForm, onSubmit logic stays here

    return (
      <AuroraLoginShell>
        <form onSubmit={handleSubmit}>
          ...your existing email/password fields, unchanged...
          <button type="submit" className="aurora-btn-primary" style={{ width: "100%" }}>
            Log in
          </button>
        </form>
      </AuroraLoginShell>
    );
  }
*/
