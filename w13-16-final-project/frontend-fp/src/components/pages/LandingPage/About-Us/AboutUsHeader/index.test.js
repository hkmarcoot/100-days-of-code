import AboutHeader from './AboutHeader'
import {render,screen} from "@testing-library/react";

 it('check if the header in the document and have the right style',()=>{
        render(<AboutHeader/>)

        const header = screen.getByTestId("aboutheaderteseting")
    
        expect(header).toBeInTheDocument();

        //testing for class
        expect(header).toHaveClass('header')

    }) 