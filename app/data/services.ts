export const SERVICE_IDS = [
  "legalization",
  "contract",
  "property",
  "poa",
  "affidavit",
  "copy",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export type Service = {
  id: ServiceId;
};

export const services: Service[] = SERVICE_IDS.map((id) => ({ id }));
