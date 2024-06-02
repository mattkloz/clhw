import { describe, test, expect } from "vitest";
import { useStripTags } from "../../composables/stripTags";


describe("useStripTags", () => {
    test("removes HTML tags from a string", async () => {
        const originalString = "Ed Joyce<sup>TM</sup>";
        const strippedString = useStripTags(originalString);
        expect(strippedString).toBe("Ed Joyce");
    });
});