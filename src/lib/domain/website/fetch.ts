export async function fetchWebsiteTabs() {
  return [
    { id: "website", label: "Website" },
    { id: "invitation", label: "Invitation" },
    { id: "gift", label: "Gift Registry" },
  ];
}

export async function fetchWebsiteAvailableSections() {
  return [
    { id: "group", label: "Group", icon: "Group" },
    { id: "paragraph", label: "Paragraph", icon: "PilcrowSquare" },
    { id: "media", label: "Media", icon: "Image" },
    { id: "embed", label: "Embedded", icon: "Code" },
  ];
}

export async function fetchWebsiteConfiguration() {
  await new Promise((r) => setTimeout(r, 2000));
}
