// src/app/actions/resend-invite.ts
'use server'

export async function resendInvite(email: string) {
  // Lógica futura de integração com Resend ou SendGrid
  console.log("Reenviando convite para:", email);
  return { success: true };
}