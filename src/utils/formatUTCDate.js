export const formatUTCDate = (utcString) => {
    const date = new Date(utcString);
    return date.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "UTC",
    });
};
