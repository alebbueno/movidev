// src/app/actions/invite.ts
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// Definimos uma interface clara para o que a função espera
interface InviteData {
  email: string;
  role: string;
  projectId?: string;
}

export async function inviteUserAction(data: InviteData) {
  const supabase = await createClient()

  // 1. Inserir na tabela public.users (que criamos anteriormente)
  const { error } = await supabase.from('users').insert([
    { 
      email: data.email, 
      role: data.role,
      // Se houver lógica de convite vinculado a projeto, adicionar aqui
    }
  ])

  if (error) {
    console.error("Erro ao convidar:", error.message)
    return { error: error.message }
  }
  
  revalidatePath('/teams')
  return { success: true }
}