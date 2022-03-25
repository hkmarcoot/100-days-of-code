import AboutUsImage from './AboutUsImage'
import {render,screen} from "@testing-library/react";

 it('check if about us image display on about us section the document and have the right style',()=>{
        render(<AboutUsImage/>)

        const aboutImageSection = screen.getByTestId("aboutUsImagetesting")
    
        expect(aboutImageSection).toBeInTheDocument();

        //testing for class
        expect(aboutImageSection).toHaveClass('imgContainer')

    }) 