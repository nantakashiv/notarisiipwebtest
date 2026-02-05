export const SERVICE_IDS = [
  "legalizationAndCertifiedCopy",
  "contract",
  "property",
  "poa",
  "affidavit",
  "legalEntityEstablishment",
  "landUsePlanning",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export type Service = {
  id: ServiceId;
};

export const services: Service[] = SERVICE_IDS.map((id) => ({ id }));
