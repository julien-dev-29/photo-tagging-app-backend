import { Request, Response } from "express";

interface Character {
    id: string;
    name: string;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    found: false
}

const characters: Character[] = [
    {
        id: crypto.randomUUID(),
        name: "Rick",
        xMin: 440,
        xMax: 585,
        yMin: 330,
        yMax: 545,
        found: false
    },
    {
        id: crypto.randomUUID(),
        name: "Morty",
        xMin: 546,
        xMax: 613,
        yMin: 194,
        yMax: 345,
        found: false
    },
    {
        id: crypto.randomUUID(),
        name: "Jerry",
        xMin: 650,
        xMax: 705,
        yMin: 50,
        yMax: 220,
        found: false
    },
    {
        id: crypto.randomUUID(),
        name: "Summer",
        xMin: 745,
        xMax: 807,
        yMin: 465,
        yMax: 604,
        found: false
    },
    {
        id: crypto.randomUUID(),
        name: "Beth",
        xMin: 857,
        xMax: 910,
        yMin: 218,
        yMax: 350,
        found: false
    },
];

export default {
    get: async (req: Request, res: Response) => {
        return res.json(characters);
    },
    check: async (req: Request, res: Response) => {
        const { characterId, x, y } = req.body;
        const character = characters.find((c) => c.id === characterId);
        if (!character) {
            return res.status(404).json({ error: "Character not found" });
        }
        // Vérification en O(1)
        const isValid =
            x >= character.xMin &&
            x <= character.xMax &&
            y >= character.yMin &&
            y <= character.yMax;
        if (isValid) {
            return res.json({ message: "Success!" });
        } else {
            return res.json({ message: "Fail!" });
        }
    },
};
