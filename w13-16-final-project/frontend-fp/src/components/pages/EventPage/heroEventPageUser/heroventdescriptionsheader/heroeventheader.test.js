import HeroEventDecriptionHeader from "./heroeventheader";
import{screen,render} from "@testing-library/react";



it('check if the Hero Header section working display the words and render',()=>{
    render(<HeroEventDecriptionHeader dataheader="hello world"/>)

    const HeroEventHeading = screen.getByText(/hello world/i)

    const HeroEventHeaderSection = screen.getByTestId("heroeventdescriptionheadertesting")

    expect(HeroEventHeaderSection).toBeInTheDocument();
    expect(HeroEventHeading).toBeInTheDocument();
    //testing for class
    expect(HeroEventHeaderSection).toHaveClass('header')
})