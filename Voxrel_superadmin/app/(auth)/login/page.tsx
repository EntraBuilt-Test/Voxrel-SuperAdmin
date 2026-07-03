import { LoginForm } from "@/components/blocks/login.block"
import { AuroraLoginShell } from "@/components/aurora/AuroraLoginShell"

export default function LoginPage() {
    return (
        <AuroraLoginShell>
            <LoginForm />
        </AuroraLoginShell>
    )
}
