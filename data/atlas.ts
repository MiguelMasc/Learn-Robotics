import data from "./atlas.json";
export const subjects = data.subjects;
export const topics = data.topics;
export const resources = data.resources as Record<
  string,
  {
    id: string;
    title: string;
    publisher: string;
    url: string;
    format: string;
    description: string;
    assumes: string;
  }
>;
export type Topic = (typeof topics)[number];
export type Subject = (typeof subjects)[number];
export const findTopic = (id: string) => topics.find((t) => t.id === id);
export const findSubject = (id: string) => subjects.find((s) => s.id === id);
