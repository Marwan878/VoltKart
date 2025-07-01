export default function sortStorageUnits(storageUnits: string[]): string[] {
  return storageUnits.sort((a, b) => {
    let aValue = parseInt(a);
    const aUnit = a.replace(/[\d\s]/g, "");
    switch (aUnit) {
      case "MB":
        aValue *= 1024;
        break;
      case "GB":
        aValue *= 1024 * 1024;
        break;
      case "TB":
        aValue *= 1024 * 1024 * 1024;
        break;
      default:
        break;
    }

    let bValue = parseInt(b);
    const bUnit = b.replace(/[\d\s]/g, "");
    switch (bUnit) {
      case "MB":
        bValue *= 1024;
        break;
      case "GB":
        bValue *= 1024 * 1024;
        break;
      case "TB":
        bValue *= 1024 * 1024 * 1024;
        break;
      default:
        break;
    }

    return aValue - bValue;
  });
}
