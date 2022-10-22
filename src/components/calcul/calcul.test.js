import { calculsum } from "./calcul";

test('fonction calcul de la somme', () => {
    const result = calculsum(13,7);
    expect(result).toBe(20);
}) 