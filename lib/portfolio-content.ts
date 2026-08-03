import rawPortfolioContent from "@/content/portfolio.json";

type Socials = { github: string; linkedin: string };
type Profile = {
  name: string;
  headline: string;
  intro: string;
  professional_summary: string;
  email: string;
  seo_description: string;
  socials: Socials;
};
type Certification = { id: string; title: string; description: string };
type Education = {
  id: string;
  title: string;
  qualification: string;
  institution: string;
  graduated: string;
  summary: string;
  description: string;
};
type Employment = {
  id: string;
  title: string;
  organization: string | null;
  location: string;
  description: string;
  start: string;
  end: string | null;
};
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string | null;
  github_url: string | null;
};
type Interests = { description: string; items: string[] };
type Milestone = {
  id: string;
  title: string;
  location: string;
  display_date: string;
  description: string;
  include_in_rag: boolean;
};
type SkillGroup = { id: string; label: string; items: string[] };

export type PortfolioContent = {
  schema_version: number;
  content_version: string;
  profile: Profile;
  certifications: Certification[];
  education: Education[];
  employment: Employment[];
  projects: Project[];
  interests: Interests;
  milestones: Milestone[];
  skills: SkillGroup[];
};

function assertUniqueIds(
  name: string,
  items: ReadonlyArray<{ id: string }>
): void {
  const ids = items.map(({ id }) => id);
  if (ids.length !== new Set(ids).size) {
    throw new Error(`Duplicate IDs in canonical portfolio ${name}`);
  }
}

const portfolioContent: PortfolioContent = rawPortfolioContent;

if (portfolioContent.schema_version !== 2) {
  throw new Error("Unsupported canonical portfolio schema version");
}
if ("location" in portfolioContent.profile) {
  throw new Error("Profile location must be explicit in the canonical schema");
}
for (const [name, items] of Object.entries({
  certifications: portfolioContent.certifications,
  education: portfolioContent.education,
  employment: portfolioContent.employment,
  projects: portfolioContent.projects,
  milestones: portfolioContent.milestones,
  skills: portfolioContent.skills,
})) {
  assertUniqueIds(name, items);
}

export default portfolioContent;
