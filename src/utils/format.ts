const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

/** Joins names into natural English, e.g. `Joe Reis and Matt Housley`. */
export function formatList(items: string[]): string {
  return listFormatter.format(items);
}
