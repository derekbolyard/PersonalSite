export type PortfolioVariant = 'notebook' | 'lab' | 'editorial' | 'antiresume';

export interface VariantMeta {
  id: PortfolioVariant;
  label: string;
  blurb: string;
}

export const variantOptions: VariantMeta[] = [
  {
    id: 'notebook',
    label: 'Working Notebook',
    blurb: 'Plain notes, active projects, less portfolio energy.',
  },
  {
    id: 'lab',
    label: 'Product Lab',
    blurb: 'Feels more like an index of experiments than a personal brand page.',
  },
  {
    id: 'editorial',
    label: 'Personal Editorial',
    blurb: 'More composed and spacious, with stronger typography.',
  },
  {
    id: 'antiresume',
    label: 'Resume Anti-Resume',
    blurb: 'Blunt, minimal, and hard to mistake for a template.',
  },
];
