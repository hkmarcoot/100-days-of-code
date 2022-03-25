import SliderContent from './sliderContent'
import {render,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"

const SliderContentMock =()=>{
    return(<BrowserRouter><SliderContent/></BrowserRouter>)
}

 it('check if the Slider component render in the document and have the right style',()=>{
        render(<SliderContentMock/>)

        const slideContent = screen.getByTestId("slideContainertesting")
    
        expect(slideContent).toBeInTheDocument();

        //testing for class
        expect(slideContent).toHaveClass('slideContainer')

    }) 