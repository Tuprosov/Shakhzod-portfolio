const siteOwner = "Shakhzodbek Gayratov";
const baseTitle = `${siteOwner} | Frontend Developer from Kristiansand, Norway`;

export function getHomeTitle(): string {
  return baseTitle;
}

export function getProjectTitle(projectName: string): string {
  return `${projectName} | Project Details - ${siteOwner}`;
}
