/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/actions/invite.ts
'use server'

export async function inviteUserAction(formData: any) {
  // Por enquanto, apenas um placeholder para o build passar
  console.log("Convite enviado:", formData);
  return { success: true };
}