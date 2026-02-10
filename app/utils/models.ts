export interface Model {
    id: string;
    name: string;
    color: string;
    bgColor: string;
    textColor: string;
}

export const MODELS: Record<string, Model> = {
    A: {
        id: "A",
        name: "Spanish Events",
        color: "#E53935", // Red
        bgColor: "bg-red-100",
        textColor: "text-red-700",
    },
    B: {
        id: "B",
        name: "English Events",
        color: "#1E88E5", // Blue
        bgColor: "bg-blue-100",
        textColor: "text-blue-700",
    },
    C: {
        id: "C",
        name: "Bilingual Events",
        color: "#43A047", // Green
        bgColor: "bg-green-100",
        textColor: "text-green-700",
    },
    D: {
        id: "D",
        name: "Special Events",
        color: "#8E24AA", // Purple
        bgColor: "bg-purple-100",
        textColor: "text-purple-700",
    },
    E: {
        id: "E",
        name: "Workshops",
        color: "#FB8C00", // Orange
        bgColor: "bg-orange-100",
        textColor: "text-orange-700",
    },
};

export const MODEL_IDS = Object.keys(MODELS);
