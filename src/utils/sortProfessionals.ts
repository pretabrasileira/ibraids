import { getDistanceInKm } from "./distance";

interface Address {
  lat: number;
  lng: number;
}

interface Service {
  id: string;
  entrepreneurId: string;
  isSponsored?: boolean;
  sponsoredType?: "diário" | "semanal" | "mensal";
  sponsoredUntil?: string;
  // outros campos...
}

interface Entrepreneur {
  id: string;
  rating?: number;
  completedServices?: number;
  addresses?: Address[];
}

export function sortServicesForConsumer(
  services: Service[],
  entrepreneurs: Entrepreneur[],
  consumerAddress: Address
): Service[] {
  // Helper para saber se o serviço está patrocinado e válido
  function isSponsoredValid(service: Service) {
    if (!service.isSponsored || !service.sponsoredUntil) return false;
    return new Date(service.sponsoredUntil) >= new Date();
  }

  // Helper para rankear tipo de patrocínio
  function sponsoredRank(type?: string) {
    if (type === "mensal") return 3;
    if (type === "semanal") return 2;
    if (type === "diário") return 1;
    return 0;
  }

  // Monta array de serviços com dados auxiliares
  const enriched = services.map(service => {
    const entrepreneur = entrepreneurs.find(e => e.id === service.entrepreneurId);
    const address = entrepreneur?.addresses?.[0];
    const distance = address
      ? getDistanceInKm(
          consumerAddress.lat,
          consumerAddress.lng,
          address.lat,
          address.lng
        )
      : Infinity;
    return {
      ...service,
      _distance: distance,
      _rating: entrepreneur?.rating || 0,
      _completed: entrepreneur?.completedServices || 0,
      _sponsoredValid: isSponsoredValid(service),
      _sponsoredRank: sponsoredRank(service.sponsoredType),
    };
  });

  // Ordenação: patrocinado válido (rank maior e data maior) > menor distância > maior avaliação > mais atendimentos
  enriched.sort((a, b) => {
    // 1. Patrocinado válido
    if (a._sponsoredValid && b._sponsoredValid) {
      if (b._sponsoredRank !== a._sponsoredRank) return b._sponsoredRank - a._sponsoredRank;
      // desempate: quem tem patrocínio válido por mais tempo
      return new Date(b.sponsoredUntil!).getTime() - new Date(a.sponsoredUntil!).getTime();
    }
    if (a._sponsoredValid) return -1;
    if (b._sponsoredValid) return 1;
    // 2. Distância
    if (a._distance !== b._distance) return a._distance - b._distance;
    // 3. Avaliação
    if (b._rating !== a._rating) return b._rating - a._rating;
    // 4. Atendimentos
    return (b._completed || 0) - (a._completed || 0);
  });

  return enriched;
} 