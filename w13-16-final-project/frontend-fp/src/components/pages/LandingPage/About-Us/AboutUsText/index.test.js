import AboutText from './AboutUsText'
import {render,screen} from "@testing-library/react";

 it('check if about us image display on about us section the document and have the right style',()=>{
        render(<AboutText/>)

        const aboutTextSection = screen.getByTestId("textHolder-testing")
    
        expect(aboutTextSection).toBeInTheDocument();

        //testing for class
        expect(aboutTextSection).toHaveClass('textHolder')

    }) 