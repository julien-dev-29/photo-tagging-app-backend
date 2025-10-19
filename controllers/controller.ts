import { Request, Response } from "express"
const characters = [
    {
        id: crypto.randomUUID(),
        name: "Jurol",
        x: [250, 251, 252, 253, 254, 255],
        y: [750, 751, 752, 753, 754, 755]
    },
    {
        id: crypto.randomUUID(),
        name: "Maël",
        x: [350, 351, 352, 353, 354, 355],
        y: [150, 151, 152, 153, 154, 155]
    },
    {
        id: crypto.randomUUID(),
        name: "Marie",
        x: [850, 851, 852, 853, 854, 855],
        y: [650, 651, 652, 653, 654, 655]
    }
]
export default {
    get: async (req: Request, res: Response) => {
        return res.json(characters)
    },

    check: async (req: Request, res: Response) => {
        const { characterId, x, y } = req.body;
        const character = characters.find((c) => c.id === characterId);
        if (!character) {
            return res.status(404).json({ error: "Character not found" });
        }
        const isValid = character.x.includes(Number(x)) && character.y.includes(Number(y));
        if (isValid) {
            return res.json({ message: "Success!" });
        } else {
            return res.json({ message: "Fail!" });
        }
    },
}