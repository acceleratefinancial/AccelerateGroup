export interface ServiceCardData {
  id: string;
  title: string;
  frontTitle: string;
  frontDesc: string;
  backEyebrow: string;
  features: string[];
  image: string;
  href: string;
}

export const servicesRow1: ServiceCardData[] = [
  {
    id: "personal",
    title: "Personal Lending",
    frontTitle: "Personal Lending",
    frontDesc:
      "Flexible personal lending solutions structured to support your life milestones with tailored rates.",
    backEyebrow: "TAILORED FINANCE FOR YOUR PERSONAL GOALS",
    features: [
      "Car, caravan, boat, motorbike, holiday, home renovation",
      "Competitive fixed and variable rate options",
      "Debt consolidation to streamline monthly payments",
      "Transparent terms with no hidden fees",
      "Fast turnaround times and dedicated broker support",
    ],
    image: "/images/home/service-personal-new.png",
    href: "/services#personal-details",
  },
  {
    id: "business",
    title: "Commercial and Business Loans",
    frontTitle: "Business Loans",
    frontDesc:
      "Commercial loans and equipment finance to fund growth and business expansion.",
    backEyebrow: "FUNDING TO GROW AND SCALE YOUR OPERATIONS",
    features: [
      "Cars, trucks, machinery, plant and equipment finance",
      "Working capital and cashflow funding",
      "Commercial property purchase and development loans",
      "Custom structuring aligned with your business cash cycle",
    ],
    image: "/images/home/service-business-new.png",
    href: "/services#business-details",
  },
];

export const servicesRow2: ServiceCardData[] = [
  {
    id: "salary",
    title: "Salary Packaging & Novated Leases",
    frontTitle: "Salary Packaging",
    frontDesc:
      "Maximise your take home pay and tax effectiveness with a novated lease",
    backEyebrow: "TAX-EFFECTIVE VEHICLE PACKAGING",
    features: [
      "Novated leasing options for new, used, and electric vehicles",
      "Pre-tax salary deductions to maximise net income",
      "Comprehensive fleet discount access",
      "Simple employer-friendly administration",
    ],
    image: "/images/home/service-salary-new.png",
    href: "/services#salary-details",
  },
  {
    id: "car",
    title: "Car Buying Solutions",
    frontTitle: "Car Buying",
    frontDesc:
      "Expert vehicle procurement and tailored vehicle finance.",
    backEyebrow: "EXPERT CAR PROCUREMENT AND FINANCE",
    features: [
      "Preferential pricing through our national dealer network",
      "Complete negotiation handled on your behalf",
      "Flexible consumer and commercial vehicle loan options",
      "Trade-in assistance and end to end service",
    ],
    image: "/images/home/service-car.png",
    href: "/services#car-details",
  },
  {
    id: "home",
    title: "Home & Property Loans",
    frontTitle: "Home Loans",
    frontDesc:
      "Tailored residential mortgages, refinancing and investment loans.",
    backEyebrow: "MORTGAGES MADE SIMPLE AND COMPETITIVE",
    features: [
      "First home buyer guidance and grant assistance",
      "Mortgage refinancing for better rates and cash out",
      "Property investment structuring and portfolio review",
      "Comparison across major banks and specialist non-bank lenders",
    ],
    image: "/images/home/service-home.png",
    href: "/services#home-details",
  },
];
