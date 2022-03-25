import SliderHeader from './SliderHeader'
import {render,screen} from "@testing-library/react";

 it('check if the Slider header in the document and have the right style',()=>{
        render(<SliderHeader/>)

        const header = screen.getByTestId("aboutSliderHeaderTesting")
    
        expect(header).toBeInTheDocument();

        //testing for class
        expect(header).toHaveClass('headerSlider')

    }) 