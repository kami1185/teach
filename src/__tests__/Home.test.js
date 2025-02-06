import { render, screen } from "@testing-library/react";
import { Home } from "../pages";

describe('Test images', ()=> {
    test('alt contains correct value', () => {
        render(<Home/>)
        // const testImage = document.querySelector("img");
        // expect(testImage.alt).toContain("The image alt tag for the large image");
    })
})


