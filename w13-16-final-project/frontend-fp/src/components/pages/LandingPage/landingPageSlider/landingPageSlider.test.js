import LandingPageSlider from "./landingPageSlider"
import {screen,render} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

const LandingPageMock =()=>{
    return(<BrowserRouter><LandingPageSlider/></BrowserRouter>)
}

it('check if the landingpageSlider section working',()=>{
    render(<LandingPageMock/>)

    const sliderSection = screen.getByTestId("landingPageSliderTesting")

     expect(sliderSection).toBeInTheDocument();

    //testing for class
    expect(sliderSection).toHaveClass('backgroundColor')
})

