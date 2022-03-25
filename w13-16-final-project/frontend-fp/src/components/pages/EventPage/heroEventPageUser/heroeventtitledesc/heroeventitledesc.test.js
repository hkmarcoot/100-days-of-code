import Heroeventitledesc from "./heroeventtitledesc";
import{screen,render} from "@testing-library/react";



it('check if the Hero Header desc title section working display the words and render',()=>{
    render(<Heroeventitledesc/>)

    const HeroEventTitleDescSection = screen.getByTestId("heroeventtitledesctesting")

    expect(HeroEventTitleDescSection).toBeInTheDocument();

    //testing for class
    expect(HeroEventTitleDescSection).toHaveClass('heroeventtitledesc')
})