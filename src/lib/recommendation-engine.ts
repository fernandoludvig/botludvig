import { Property, properties } from './properties-database';

export interface UserPreferences {
  maxBudget?: number;
  minBedrooms?: number;
  preferredLocations?: string[];
  minArea?: number;
  preferredType?: 'apartment' | 'house' | 'development';
  preferredStatus?: 'ready' | 'launch' | 'construction';
  excludeIds?: string[];
}

export function recommendProperties(prefs: UserPreferences): Property[] {
  // CRÍTICO: SEMPRE respeitar o critério de quartos exato
  let filtered = [...properties];
  
  // Primeiro filtro: Excluir imóveis já mostrados
  if (prefs.excludeIds && prefs.excludeIds.length > 0) {
    filtered = filtered.filter(p => !prefs.excludeIds!.includes(p.id));
  }
  
  // Segundo filtro: NÚMERO EXATO DE QUARTOS (nunca relaxar este critério)
  if (prefs.minBedrooms) {
    filtered = filtered.filter(p => p.bedrooms === prefs.minBedrooms!);
  }

  // Terceiro filtro: Orçamento
  if (prefs.maxBudget) {
    filtered = filtered.filter(p => p.price <= prefs.maxBudget!);
  }

  // Quarto filtro: Localização (se especificada)
  if (prefs.preferredLocations && prefs.preferredLocations.length > 0) {
    filtered = filtered.filter(p => 
      prefs.preferredLocations!.some(loc => 
        p.location.toLowerCase().includes(loc.toLowerCase()) ||
        p.neighborhood.toLowerCase().includes(loc.toLowerCase()) ||
        p.city.toLowerCase().includes(loc.toLowerCase())
      )
    );
  }

  // Se temos pelo menos 1 resultado com critérios exatos, retornar até 3
  if (filtered.length > 0) {
    if (prefs.maxBudget) {
      filtered.sort((a, b) => {
        const diffA = Math.abs(a.price - prefs.maxBudget!);
        const diffB = Math.abs(b.price - prefs.maxBudget!);
        return diffA - diffB;
      });
    }
    return filtered.slice(0, 3);
  }

  // Se não encontrou nada com critérios exatos, mostrar opções até 150k acima do orçamento
  // MAS SEMPRE manter o critério de quartos
  let flexibleMatches = [...properties];
  
  // CRÍTICO: Manter número exato de quartos
  if (prefs.minBedrooms) {
    flexibleMatches = flexibleMatches.filter(p => p.bedrooms === prefs.minBedrooms!);
  }

  // Mostrar opções até 150k acima do orçamento para sugestão de proposta
  if (prefs.maxBudget) {
    flexibleMatches = flexibleMatches.filter(p => p.price <= prefs.maxBudget! + 150000);
  }

  // Se ainda não encontrou, relaxar localização também
  if (flexibleMatches.length === 0 && prefs.preferredLocations && prefs.preferredLocations.length > 0) {
    flexibleMatches = [...properties];
    
    // CRÍTICO: Manter número exato de quartos
    if (prefs.minBedrooms) {
      flexibleMatches = flexibleMatches.filter(p => p.bedrooms === prefs.minBedrooms!);
    }
    
    // Mostrar opções até 150k acima do orçamento
    if (prefs.maxBudget) {
      flexibleMatches = flexibleMatches.filter(p => p.price <= prefs.maxBudget! + 150000);
    }
    // Removido filtro de localização
  }

  // Ordenar por relevância
  if (prefs.maxBudget) {
    flexibleMatches.sort((a, b) => {
      const diffA = Math.abs(a.price - prefs.maxBudget!);
      const diffB = Math.abs(b.price - prefs.maxBudget!);
      return diffA - diffB;
    });
  }

  return flexibleMatches.slice(0, 3);
}
