export interface VisaSource {
  label: string;
  url: string;
}

export interface VisaPolicy {
  category: string;
  label: string;
  stayLimit: string | null;
  verifiedAt: string;
  passportOrigin: string;
  note: string;
  sources: VisaSource[];
}

export interface InternationalEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startMonth: string;
  location: string;
  price: string;
  verified: boolean;
  applicationsOpen: boolean;
  pageUrl: string;
  durationDays: number;
  isCancelled: boolean;
  city: string;
  destinationKey: string;
  destinationLabel: string;
  destinationFlag: string;
  visaPolicy: VisaPolicy;
}

export interface InternationalDestination {
  key: string;
  label: string;
  flag: string;
  visaPolicy: VisaPolicy;
  eventCount: number;
  nextEventDate: string | null;
  lastEventDate: string | null;
  cities: string[];
  events: InternationalEvent[];
}

export interface RemovalSummary {
  cancelled: number;
  durationOver4Days: number;
  invalidDateRanges: number;
}

export interface InternationalDatasetMetadata {
  title: string;
  sourceFile: string;
  generatedFiles: string[];
  sourcePage: string | null;
  extractionDate: string | null;
  effectiveFilters: string | null;
  exportMethod: string | null;
  note: string | null;
  reviewOrdering: string;
  passportOrigin: string;
  visaVerificationDate: string;
  cleaningRules: string[];
  counts: {
    original: number;
    cleaned: number;
    removed: number;
    destinations: number;
  };
  removalSummary: RemovalSummary;
  monthBreakdown: Record<string, number>;
}

export interface RemovedInternationalEvent
  extends Omit<InternationalEvent, 'destinationKey' | 'destinationLabel' | 'city'> {
  destinationKey: string | null;
  destinationLabel: string | null;
  city: string | null;
  removalReasons: string[];
}

export interface InternationalDataset {
  metadata: InternationalDatasetMetadata;
  destinations: InternationalDestination[];
  events?: InternationalEvent[];
  removedEvents?: RemovedInternationalEvent[];
}
