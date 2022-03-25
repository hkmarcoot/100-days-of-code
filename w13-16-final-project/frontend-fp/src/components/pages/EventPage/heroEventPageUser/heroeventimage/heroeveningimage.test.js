import HeroEventImage from "./heroeventimage";
import{screen,render} from "@testing-library/react";

it('check if the HeroEventUserMock section working and render',()=>{
    render(<HeroEventImage dataimg={[]}/>)

    const HeroEventImageSection = screen.getByTestId("heroEventImageTesting")

     expect(HeroEventImageSection).toBeInTheDocument();

    //testing for class
    expect(HeroEventImageSection).toHaveClass('HeroEventImage')
})