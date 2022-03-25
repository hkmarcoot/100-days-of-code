import HeroDescText from "./herodesctext";
import{screen,render} from "@testing-library/react";



it('check if the Hero desciption text section working and render',()=>{
    render(<HeroDescText/>)

    const HeroDescTextSection = screen.getByTestId("heroEventDescriptionTextTesting")

     expect(HeroDescTextSection).toBeInTheDocument();

    //testing for class
    expect(HeroDescTextSection).toHaveClass('heroEventDescriptionText')
})