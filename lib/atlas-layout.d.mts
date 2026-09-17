export type AtlasLayout = {
  nodes: { id: string; x: number; y: number; width: number; height: number }[];
  edges: {
    id: string;
    source: string;
    target: string;
    points: { x: number; y: number }[];
  }[];
};
export function layoutAtlas(
  subjects: { id: string; children: string[] }[],
  relationships: string[][],
  expanded?: string[],
  compact?: boolean,
): Promise<AtlasLayout>;
